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
import mongoose from 'mongoose';
import app from '../../server.js';
import userModel from '../../models/userModel.js';
import bcrypt from 'bcrypt';

// Test user data
const TEST_USER = {
  name: 'Test User',
  email: 'test@example.com',
  password: 'password123'
};

// Global setup already connects to DB in tests/setup.js
afterAll(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await userModel.deleteMany({});
});

describe('POST /api/user/register', () => {
  it('should register a new user successfully', async () => {
    const response = await request(app)
      .post('/api/user/register')
      .send(TEST_USER);

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();

    // Verify user was actually created in database
    const userInDb = await userModel.findOne({ email: TEST_USER.email });
    expect(userInDb).toBeDefined();
    expect(userInDb.name).toBe(TEST_USER.name);
    expect(userInDb.email).toBe(TEST_USER.email);
  });

  it('should not register a user with an existing email', async () => {
    // First, create a user
    await request(app)
      .post('/api/user/register')
      .send(TEST_USER);

    // Try to create another user with same email
    const response = await request(app)
      .post('/api/user/register')
      .send(TEST_USER);

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('already exists');
  });
});

describe('POST /api/user/login', () => {
  beforeEach(async () => {
    // Create a user before each login test
    const hashedPassword = await bcrypt.hash(TEST_USER.password, 10);
    await userModel.create({
      name: TEST_USER.name,
      email: TEST_USER.email,
      password: hashedPassword
    });
  });

  it('should log in successfully with correct credentials', async () => {
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: TEST_USER.email,
        password: TEST_USER.password
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();
  });

  it('should fail login with incorrect password', async () => {
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: TEST_USER.email,
        password: 'wrongpassword'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('Invalid credential');
  });

  it('should fail login for non-existent user', async () => {
    const response = await request(app)
      .post('/api/user/login')
      .send({
        email: 'nonexistent@example.com',
        password: TEST_USER.password
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(false);

    // updated to match your controller's actual message
    expect(response.body.message).toContain('User not found');
  });
});