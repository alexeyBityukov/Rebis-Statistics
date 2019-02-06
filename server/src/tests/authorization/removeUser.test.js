import { deleteTestRequest, responseIsCorrect } from '../wrappers/testRequest.test';


export default getCurrentUser => (done) => {
  const user = { ...getCurrentUser() };

  deleteTestRequest(
    '/api/users/current',
    user.token,
    {},
    done,
    responseIsCorrect(
      200,
      'object',
      {
        message: 'User successfully removed',
      },
    ),
  );
};
