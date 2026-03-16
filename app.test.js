const request = require("supertest"); // required for testing HTTP servers
const app = require("./Index");

describe("GET /", () => {
  it("should return 200 OK and Hello World message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello World"); // valid case
  });
});
// connect with index.js (see variables)