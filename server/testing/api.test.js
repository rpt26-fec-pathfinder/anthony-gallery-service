jest.useFakeTimers()
const app = require('../app');
const supertest = require("supertest");
const request = supertest(app);


describe('GET REQUEST FOR images from page ranging 1 through 10M!!!!!!', () => {

  test("a. Gets the test endpoint", async (done) => {
    const randomPage = Math.floor(Math.random() * (1e7) + 1);
    const res = await request.get(`/images/${randomPage}`);
    const { _id, mainImages, headerImage } = res.body[0];

    expect(res.status).toBe(200);
    expect(_id).toEqual(`${randomPage}`);
    expect(Array.isArray(res.body)).toBe(true);
    expect(headerImage).toBeDefined();
    expect(Array.isArray(mainImages)).toBe(true);

    done();
  }, 120000);
});

describe('GET REQUEST from pages less than greater than 10M do NOT exist!!!', () => {

  test("a. Test should return a 404", async (done) => {
    const randomPage = Math.floor(Math.random() * (901) + 1e7);
    const res = await request.get(`/images/${randomPage}`);

    expect(res.status).toBe(500);

    done();
  }, 120000);
});