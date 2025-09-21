// __tests__/api.integration.test.js
import request from "supertest";
import app from "../server.js";
import userModel from "../models/userModel.js";

beforeEach(async () => {
  await userModel.deleteMany({});
});

describe("POST /api/user/register", () => {
  it("should register a new user successfully", async () => {
    const testUser = {
      name: "Test User",
      email: "test@example.com",
      password: "securePassword123",
    };

    const response = await request(app).post("/api/user/register").send(testUser);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("success", true);
    expect(response.body).toHaveProperty("token");

    const userInDb = await userModel.findOne({ email: "test@example.com" });
    expect(userInDb).toBeDefined();
    expect(userInDb.name).toBe("Test User");
  });

  it("should not register a user with an existing email", async () => {
    const existingUser = new userModel({
      name: "Existing User",
      email: "exists@example.com",
      password: "hashedPassword",
    });
    await existingUser.save();

    const response = await request(app)
      .post("/api/user/register")
      .send({
        name: "New User",
        email: "exists@example.com",
        password: "password123",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("already exists");
  });
});