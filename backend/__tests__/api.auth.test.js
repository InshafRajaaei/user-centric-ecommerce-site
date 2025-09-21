// __tests__/api.auth.test.js
import request from "supertest";
import bcrypt from "bcrypt";
import app from "../server.js";
import userModel from "../models/userModel.js";

describe("POST /api/user/login", () => {
  it("should log in successfully with correct credentials", async () => {
    const plainPassword = "password123";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const testUser = new userModel({
      name: "Auth Test User",
      email: "auth@example.com",
      password: hashedPassword,
    });
    await testUser.save();

    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "auth@example.com",
        password: plainPassword,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty("token");
  });

  it("should fail login with incorrect password", async () => {
    const plainPassword = "password123";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const testUser = new userModel({
      name: "Auth Wrong Password",
      email: "wrongpass@example.com",
      password: hashedPassword,
    });
    await testUser.save();

    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "wrongpass@example.com",
        password: "badpassword",
      });

    expect(response.statusCode).toBe(200); 
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Invalid");
  });

  it("should fail login for non-existent user", async () => {
    const response = await request(app)
      .post("/api/user/login")
      .send({
        email: "notfound@example.com",
        password: "whatever123",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("not found");
  });
});