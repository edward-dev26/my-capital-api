import request from 'supertest';
import app from '../src/app';

it('should send response text', async () => {
  const response = await request(app).get('/').send();
  console.log(response);

  expect(response.status).toEqual(200);
  expect(response.text).toEqual('My Capital API - deployed by github actions!');
});
