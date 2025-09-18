const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  describe('GET /', () => {
    test('should return welcome message with endpoints info', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        message: 'Bem-vindo à API do Tutorial TDD com GitHub Copilot!',
        data: {
          version: '1.0.0',
          endpoints: [
            'GET /',
            'GET /health'
          ]
        }
      });
    });
  });

  describe('GET /health', () => {
    test('should return health check status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        message: 'API is running successfully'
      });
    });
  });
});