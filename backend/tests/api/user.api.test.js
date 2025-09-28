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