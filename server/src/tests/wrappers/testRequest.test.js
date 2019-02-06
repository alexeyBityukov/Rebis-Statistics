import chai, { expect } from 'chai';
import server from '../../server';


export const postTestRequest = (url, body, done, callback) => {
  chai.request(server)
    .post(url)
    .send(body)
    .end((error, response) => {
      callback(error, response);
      done();
    });
};

export const putTestRequest = (url, token, body, done, callback) => {
  chai.request(server)
    .put(url)
    .set('Authorization', `Bearer ${token}`)
    .send(body)
    .end((error, response) => {
      callback(error, response);
      done();
    });
};

export const deleteTestRequest = (url, token, body, done, callback) => {
  chai.request(server)
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .send(body)
    .end((error, response) => {
      callback(error, response);
      done();
    });
};

export const getTestRequest = (url, done, callback) => {
  chai.request(server)
    .get(url)
    .end((error, response) => {
      callback(error, response);
      done();
    });
};

export const getTestRequestWithToken = (url, token, done, callback) => {
  chai.request(server)
    .get(url)
    .set('Authorization', `Bearer ${token}`)
    .end((error, response) => {
      callback(error, response);
      done();
    });
};

export const responseIsCorrect = (
  status,
  bodyType,
  body,
  callback = () => {},
) => (error, response) => {
  response.should.have.status(status);
  expect(response).to.be.json;
  response.body.should.be.a(bodyType);
  Object.keys(body).forEach((key) => {
    response.body[key].should.equal(body[key]);
  });
  callback(error, response);
};
