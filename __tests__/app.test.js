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
});
// path	method	body
// /echo	POST	status code 200 and plain text with the request body
// /red	GET	html with an h1 and the word red
// /green	GET	html with an h1 and the word green
// /blue	GET	html with an h1 and the word blue
// Everything else respond with 404 and a not found HTML page.
