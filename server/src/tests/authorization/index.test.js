import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  createUser,
  errorUserAlreadyTaken,
} from './createUser.test';
import validatingToken from './validatingToken.test';
import {
  authorization,
  invalidAuthorization,
} from './authorizationUser.test';
import {
  userIsValid,
  invalidToken,
} from './getUser.test';
import updateUser from './updateUser.test';
import removeUser from './removeUser.test';
import models from '../../db';


const should = chai.should();

chai.use(chaiHttp);

let currentUser = {};

describe('Api Users', () => {
  before((done) => {
    models.User.deleteMany({}, () => {
      done();
    });
  });

  describe('GET /api/users', () => {
    it('should be error, invalid Token', validatingToken);
  });

  describe('POST /api/users/register', () => {
    it('should register new user', createUser);
    it('should be error, user is already taken', errorUserAlreadyTaken);
  });

  describe('POST /api/users/authenticate', () => {
    it('should authorize user', authorization((body) => { currentUser = body; }));
    it('should be err, username or password is incorrect', invalidAuthorization);
  });

  describe('GET /api/users/current', () => {
    it('should get current user', userIsValid(() => currentUser));
    it('should be err, invalid Token', invalidToken(() => {
      const currentUserWitoutToken = { ...currentUser };
      currentUserWitoutToken.token = undefined;
      return currentUserWitoutToken;
    }));
  });

  describe('PUT /api/users/current', () => {
    it('should update current user', updateUser(() => currentUser, (body) => { currentUser = body; }));
    it('should get current user', userIsValid(() => currentUser));
  });

  describe('DELETE /api/users/current', () => {
    it('should remove current user', removeUser(() => currentUser));
    it('should error, user not found', invalidToken(() => currentUser));
  });
});
