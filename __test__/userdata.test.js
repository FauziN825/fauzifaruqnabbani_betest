const { beforeEach, afterAll } = require("@jest/globals");
const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

beforeAll(done => {
    done()
})

const userLogin = {
    "userName":"fauzifaruq",
    "password":"fauzi1234"
}

beforeAll(done => {
    done()
})
var token = ''
const _id = '612ef31e9f7e2cd62180f9b8'
const _iduserdelete  = "612f12dd9e3d09ef18fbcde5"
const newUser = {
    "userName":"faisal12",
    "password":"faisal112",
    "emailAddress":"faisal120@gmail.com",
    "accountNumber":1000012,
    "identityNumber":10012
}


const dataUpdate = {

    "emailAddress":"fauzifaruqn7@gmail.com",

}

const useridentity = 167890

const useraccount =  1456789

describe("USER DATA", () => {
    test("Successfully login into api, getting access token", async () => {
        const response = await request(app).post("/api/login").send(userLogin);
        token=response.body.results
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Login Successfully');
    });
    test("Successfully get all user", async () => {
        const response = await request(app).get("/api/users/getAll")
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("GET ALL USER");
    });
    test("Fail no auth get all user", async () => {
        const response = await request(app).get("/api/users/getAll");
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("You need Authorization");
    });
    test("Successfully create data user", async () => {
        const response = await request(app).post("/api/users/add")
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        .send(newUser);
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User added successfully');
    });
    test("Successfully get user by id", async () => {
        const response = await request(app).get("/api/users/"+_id)
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("get by id");
    });
    test("Successfully get user by account number", async () => {
        const response = await request(app).get("/api/users/account/"+useraccount)
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Get by Account Number");
    });
    test("Successfully get user by identity number", async () => {
        const response = await request(app).get("/api/users/identity/"+useridentity)
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Get by Identity Number");
    });
    test("Successfully get logged user", async () => {
        const response = await request(app).get("/api/users/")
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Logged in User Details");
    });
    test("Successfully update user by id", async () => {
        const response = await request(app).patch("/api/users/"+_id).send(dataUpdate)
        .set('Authorization', 'Bearer '+token) //set header for this test
        .set('Content-Type',  'application/json') //set header for this test
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("User Updated");
    });
    test("Successfully delete user by id", async () => {
        const response = await request(app).delete("/api/users/"+_iduserdelete)
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Successfully Deleted");
    });
    test("Failed delete user by id (User Not Found)", async () => {
        const response = await request(app).delete("/api/users/"+_iduserdelete)
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(400);
        // expect(response.body.message).toBe("User Data Not Found");
    });
    test("Failed get user by id (User Not Found)", async () => {
        const response = await request(app).get("/api/users/11111")
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(500);
        // expect(response.body.message).toBe("User Data Not Found");
    });
    test("Failed get user by account Number (User Not Found)", async () => {
        const response = await request(app).get("/api/users/account/11111")
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(400);
        // expect(response.body.message).toBe("User Data Not Found");
    });
    test("Failed get user by identity Number (User Not Found)", async () => {
        const response = await request(app).get("/api/users/identity/111111")
        .set('Authorization', 'Bearer '+token) 
        .set('Content-Type',  'application/json') 
        expect(response.statusCode).toBe(400);
        // expect(response.body.message).toBe("User Data Not Found");
    });


});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})