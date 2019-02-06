import express from 'express';
import {
  authenticateUser,
  // getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
} from './service';

const authenticate = (req, res, next) => {
  authenticateUser(req.body)
    .then(user => (user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' })))
    .catch(err => next(err));
};

const register = (req, res, next) => {
  createUser(req.body)
    .then(response => res.json(response))
    .catch(err => next(err));
};

/* const getAll = (req, res, next) => {
  getAllUsers()
    .then(users => res.json(users))
    .catch(err => next(err));
}; */

const getCurrent = (req, res, next) => {
  getUserById(req.user.sub)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
};

/* const getById = (req, res, next) => {
  getUserById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}; */

const update = (req, res, next) => {
  updateUser(req.user.sub, req.body)
    .then(() => res.json({ message: 'User successfully updated' }))
    .catch(err => next(err));
};

const remove = (req, res, next) => {
  removeUser(req.user.sub)
    .then(() => res.json({ message: 'User successfully removed' }))
    .catch(err => next(err));
};

const router = express.Router();

router.post('/authenticate', authenticate);
router.post('/register', register);
// router.get('/', getAll);
router.get('/current', getCurrent);
// router.get('/:id', getById);
router.put('/current', update);
router.delete('/current', remove);

export default router;
