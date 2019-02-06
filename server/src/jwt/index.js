import expressJwt from 'express-jwt';
import config from '../config';
import { getUserById } from '../controllers/authorization/service';

const isRevoked = async (req, payload, done) => {
  const user = await getUserById(payload.sub);

  if (!user) {
    return done(null, true);
  }

  return done();
};

export default () => expressJwt({ secret: config.secret, isRevoked }).unless({
  path: [
    '/api/users/authenticate',
    '/api/users/register',
    '/',
    /\/static/,
    '/favicon.ico',
  ],
});
