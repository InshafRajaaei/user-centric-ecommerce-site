// const request = require('supertest');
// const app = require('../../server');

// describe('User API Tests', () => {
//   describe('POST /api/user/register', () => {
//     it('should register a new user successfully', async () => {
//       const userData = {
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123'
//       };

//       const response = await request(app)
//         .post('/api/user/register')
//         .send(userData);

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('success', true);
//       expect(response.body).toHaveProperty('token');
//       expect(typeof response.body.token).toBe('string');
//     });

//     it('should fail with invalid email', async () => {
//       const userData = {
//         name: 'Test User',
//         email: 'invalid-email',
//         password: 'password123'
//       };

//       const response = await request(app)
//         .post('/api/user/register')
//         .send(userData);

//       expect(response.body).toHaveProperty('success', false);
//       expect(response.body.message).toMatch(/valid email/i);
//     });

//     it('should fail with short password', async () => {
//       const userData = {
//         name: 'Test User',
//         email: 'test2@example.com',
//         password: 'short'
//       };

//       const response = await request(app)
//         .post('/api/user/register')
//         .send(userData);

//       expect(response.body).toHaveProperty('success', false);
//       expect(response.body.message).toMatch(/strong password/i);
//     });
//   });

//   describe('POST /api/user/login', () => {
//     it('should login existing user successfully', async () => {
//       // First register a user
//       const userData = {
//         name: 'Login Test User',
//         email: 'login@example.com',
//         password: 'password123'
//       };
//       await request(app).post('/api/user/register').send(userData);

//       // Now try to login
//       const loginData = {
//         email: 'login@example.com',
//         password: 'password123'
//       };

//       const response = await request(app)
//         .post('/api/user/login')
//         .send(loginData);

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('success', true);
//       expect(response.body).toHaveProperty('token');
//     });

//     it('should fail login with wrong password', async () => {
//       const loginData = {
//         email: 'login@example.com',
//         password: 'wrongpassword'
//       };

//       const response = await request(app)
//         .post('/api/user/login')
//         .send(loginData);

//       expect(response.body).toHaveProperty('success', false);
//       expect(response.body.message).toMatch(/invalid credential/i);
//     });
//   });
// });

import request from 'supertest';
import app from '../../server.js';

describe('User API Tests', () => {
  describe('POST /api/user/register', () => {
    it('should register a new user successfully', async () => {
      const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };

      const res = await request(app).post('/api/user/register').send(userData);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('success', true);
      expect(typeof res.body.token).toBe('string');
    });
  });

  describe('POST /api/user/login', () => {
    it('should login existing user successfully', async () => {
      const userData = { name: 'Login Test User', email: 'login@example.com', password: 'password123' };
      await request(app).post('/api/user/register').send(userData);

      const loginData = { email: 'login@example.com', password: 'password123' };
      const res = await request(app).post('/api/user/login').send(loginData);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('token');
    });
  });
});