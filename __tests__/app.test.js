const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns plain text hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });  
  });
  it('echos a POST request', () => {
    return request(app)
      .post('/')
      .send('greetings earthling')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('greetings earthling');
      });
  });
  it('returns GET html with an h1 and the word red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
  it('returns GET html with an h1 and the word blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
  it('returns GET html with an h1 and the word green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });
});

