const { beforeEach, afterAll } = require("@jest/globals");
const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

const userName = "fauzi00108";
const password = "password12308";
const accountNumber = "00001008";
const identityNumber = "000030010008";

beforeAll((done) => {
  done();
});

describe("Testing auth api, for register and login purposes", () => {
  test("Successfully sign up new user Data", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: password,
        emailAddress: `${userName}@gmail.com`,
        accountNumber: accountNumber,
        identityNumber: identityNumber,
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User added successfully");
  });
  test("Failed to sign up new user, because user already register ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: password,
        emailAddress: `${userName}@gmail.com`,
        accountNumber: accountNumber,
        identityNumber: identityNumber,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("User Data is Already Registered");
  });
  test("Failed to sign up new user, Username already registered ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: password,
        emailAddress: `${userName}1@gmail.com`,
        accountNumber: `${accountNumber}1`,
        identityNumber: `${identityNumber}1`,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Username already used, please input another username"
    );
  });
  test("Failed to sign up new user, username is empty ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: "",
        password: password,
        emailAddress: `${userName}@gmail.com`,
        accountNumber: `${accountNumber}`,
        identityNumber: `${identityNumber}`,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Username can't be empty");
  });

  test("Failed to sign up new user, password is empty ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: "",
        emailAddress: `${userName}1@gmail.com`,
        accountNumber: `${accountNumber}1`,
        identityNumber: `${identityNumber}1`,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Password can't be empty");
  });

  test("Failed to sign up new user, password less than 5 characters ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: "12",
        emailAddress: `${userName}@gmail.com`,
        accountNumber: `${accountNumber}`,
        identityNumber: `${identityNumber}`,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Password must be at least 5 characters"
    );
  });

  test("Failed to sign up new user, invalid email address ", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        userName: userName,
        password: password,
        emailAddress: `${userName}gmail.com`,
        accountNumber: `${accountNumber}`,
        identityNumber: `${identityNumber}`,
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Please enter valid email address");
  });

  test("Successfully sign in as new user", async () => {
    const response = await request(app).post("/api/login").send({
      userName: userName,
      password: password,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login Successfully");
  });
  test("Failed to sign in, user not found", async () => {
    const response = await request(app).post("/api/login").send({
      userName: `wrongusername`,
      password: password,
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("User Not found");
  });
  test("Failed to sign in, wrong password", async () => {
    const response = await request(app).post("/api/login").send({
      userName: userName,
      password: "wrongpassword",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Wrong Password");
  });
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});
