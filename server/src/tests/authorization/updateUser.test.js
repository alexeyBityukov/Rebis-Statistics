import { putTestRequest, responseIsCorrect } from '../wrappers/testRequest.test';


export default (getCurrentUser, updateBody) => (done) => {
  const user = { ...getCurrentUser() };
  const username = 'alexBit';
  user.username = username;

  putTestRequest(
    '/api/users/current',
    user.token,
    {
      username,
    },
    done,
    responseIsCorrect(
      200,
      'object',
      {
        message: 'User successfully updated',
      },
      () => {
        updateBody(user);
      },
    ),
  );
};
