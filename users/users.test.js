import { test, expect } from "vitest";
import app from "../app.js";
import request from "supertest";
import { json } from "express/lib/response.js";

// Ticket 3
// Barebones test
// test("GET /api/health works");

// Ticket 4
// Goal: make a GET request with Supertest to the /api/health
//
// import the Express app from app.js (because it needs to be tested) ✅
// import the function from Supertest (maybe call it `request` like the documentation did) ✅
// within the existing test, follow the example from the documentation and:
//    call `request` and pass in the Express app as an argument ✅
//    send a GET request to the /api/health endpoint ✅
//    await the overall expression and assign it to a `response` constant ✅
//    console.log `response.body` for now to at least see a result ✅

test("responds with json", async function () {
  const response = await request(app).get("/api/health")//.set("Accept", "application/json");
  console.log(response.headers);
  // check if the request.body is enquals to the response.
  expect(response.body).toEqual({
    success: true,
    payload: "API is running correctly",
  });
  expect(response.status).toEqual(200);
  //expect(response.headers["content-type"]).toEqual('application/json');
  expect(response.headers["content-type"]).toMatch(/json/);
});

//Assert that the Content-Type response header contains application/json