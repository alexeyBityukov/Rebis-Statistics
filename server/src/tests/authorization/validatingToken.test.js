import { getTestRequest, responseIsCorrect } from '../wrappers/testRequest.test';

export default (done) => {
  getTestRequest('/api/users/', done, responseIsCorrect(
    401,
    'object',
    { message: 'Invalid Token' },
  ));
};
