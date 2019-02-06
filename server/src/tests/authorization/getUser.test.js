import { getTestRequestWithToken, responseIsCorrect } from '../wrappers/testRequest.test';


export const userIsValid = getCurrentUser => (done) => {
  const currentUser = getCurrentUser();
  getTestRequestWithToken(
    '/api/users/current',
    currentUser.token,
    done,
    responseIsCorrect(
      200,
      'object',
      {
        _id: currentUser._id,
        username: currentUser.username,
        password: currentUser.password,
        createdDate: currentUser.createdDate,
      },
    ),
  );
};

export const invalidToken = getCurrentUser => (done) => {
  const currentUser = getCurrentUser();
  getTestRequestWithToken(
    '/api/users/current',
    currentUser.token,
    done,
    responseIsCorrect(
      401,
      'object',
      {
        message: 'Invalid Token',
      },
    ),
  );
};
