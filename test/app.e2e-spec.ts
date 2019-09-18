import request from 'supertest';

import { createApp } from '../src/server'
import { Server } from 'http';

describe('AppController (e2e)', () => {
  let app: { server: Server };

  beforeEach(async () => {
    app = await createApp();
  });

  describe('Testing things', () => {

    it('POST /', () => {
      return request(app.server)
        .post('/')
        .expect(405)
        .expect('Method Not Allowed');
    });

    it('HEAD /', () => {
      return request(app.server)
        .head('/')
        .expect(403);
    });

    it('GET /', () => {
      return request(app.server)
        .get('/')
        .expect(403);
    });

    it('PUT /', () => {
      return request(app.server)
        .put('/')
        .expect(405)
        .expect('Method Not Allowed');
    });

    it('PATCH /', () => {
      return request(app.server)
        .patch('/')
        .expect(405)
        .expect('Method Not Allowed');
    });

    it('DELETE /', () => {
      return request(app.server)
        .delete('/')
        .expect(405)
        .expect('Method Not Allowed');
    });

  });

  describe('Response headers', () => {

    it('HEAD /abc-123_W100H100.jpeg', () => {
      return request(app.server)
        .head('/abc-123_W100H100.jpeg')
        .expect(200)
        .expect('Content-Type', 'image/jpeg');
    });

    // it('GET /abc-123_W100H100.jpeg', () => {
    //   return request(app.server)
    //     .get('/')
    //     .expect(200)
    //     .expect('Content-Type', 'image/jpeg');
    // });

  });

});
