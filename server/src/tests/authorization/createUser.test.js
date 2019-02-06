import { postTestRequest, responseIsCorrect } from '../wrappers/testRequest.test';
import user from './user.test';


export const createUser = (done) => {
  postTestRequest('/api/users/register', user, done,
    responseIsCorrect(200, 'object', {
      message: `Username "${user.username}" successfully created`,
    }));
};

export const errorUserAlreadyTaken = (done) => {
  postTestRequest('/api/users/register', user, done,
    responseIsCorrect(500, 'object', {
      message: `Username "${user.username}" is already taken`,
    }));
};
