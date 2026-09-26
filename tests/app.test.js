const request = require("supertest");
const app = require("../app");

describe("API Tests", () => {
    test("GET / should return CI Pipeline Working", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("CI Pipeline Working");
    });

    test("GET /health should return ok", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("ok");
    });
});