import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../../config';
import models from '../../db';

export const authenticateUser = async ({ username, password }) => {
  const user = await models.User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token,
    };
  }
  return false;
};

/* export const getAllUsers = async () => {
  const users = await models.User.find().select('-hash');
  return users;
}; */

export const getUserById = async (id) => {
  const user = await models.User.findById(id).select('-hash');
  return user;
};

export const createUser = async (userParam) => {
  if (await models.User.findOne({ username: userParam.username })) {
    throw new Error(`Username "${userParam.username}" is already taken`);
  }

  const user = new (models.User)(userParam);

  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  await user.save();
  return { message: `Username "${userParam.username}" successfully created` };
};

export const updateUser = async (id, body) => {
  const userParam = body;
  const user = await models.User.findById(id);

  if (!user) throw new Error('User not found');
  if (user.username !== userParam.username
    && await models.User.findOne({ username: userParam.username })) {
    throw new Error(`Username "${userParam.username}" is already taken`);
  }

  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  Object.assign(user, userParam);

  await user.save();
};

export const removeUser = async (id) => {
  await models.User.findOneAndDelete(id);
};
