import { postTestRequest, responseIsCorrect } from '../wrappers/testRequest.test';
import user from './user.test';


export const authorization = (saveBody => (done) => {
  postTestRequest(
    '/api/users/authenticate',
    user,
    done,
    responseIsCorrect(
      200,
      'object',
      {
        username: user.username,
        password: user.password,
      },
      (error, response) => {
        response.body._id.should.be.a('string');
        response.body._id.should.not.equal('');
        response.body.token.should.be.a('string');
        response.body.token.should.not.equal('');
        response.body.hash.should.be.a('string');
        response.body.hash.should.not.equal('');
        saveBody(response.body);
      },
    ),
  );
});

export const invalidAuthorization = (done) => {
  postTestRequest(
    '/api/users/authenticate',
    {
      username: user.username,
      password: `${user.password} `,
    },
    done,
    responseIsCorrect(
      400,
      'object',
      {
        message: 'Username or password is incorrect',
      },
    ),
  );
};
