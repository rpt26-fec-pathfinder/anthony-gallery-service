const app = require('../server/app');
const supertest = require("supertest");
const request = supertest(app);



describe('GET REQUEST FOR images from page ranging 1 through 100!!!!!!', () => {

  test("a. Gets the test endpoint", async (done) => {
    const randomPage = Math.floor(Math.random() * (100) + 1);
    const res = await request.get(`/images/${randomPage}`);
    const { page, mainImages, moreLikeThisImages } = res.body[0];

    expect(res.status).toBe(200);
    expect(page).toEqual(`${randomPage}`);
    expect(Array.isArray(res.body)).toBe(true);
    expect(Array.isArray(mainImages)).toBe(true);
    expect(Array.isArray(moreLikeThisImages)).toBe(true);

    done();
  });
});

describe('GET REQUEST from pages less than greater than 100 do NOT exist!!!', () => {

  test("a. Test should return a 404", async (done) => {
    const randomPage = Math.floor(Math.random() * (901) + 101);
    const res = await request.get(`/images/${randomPage}`);

    expect(res.status).toBe(404);

    done();
  });
});