jest.useFakeTimers();
const mongoose = require('mongoose');
const { generateData } = require('../../seed/seedingScript');

// connect to mongo prior to tests
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/steam',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
})

afterAll(() => {
  mongoose.connection.close();
});


// tests
describe('Seeding Script Test to ensure data contains 100 items!!!', () => {
  const data = generateData();

  test('a. test should have 100 items total', (done) => {
    expect(data).toHaveLength(100);

    done();
  });

  test('b. test should be an array', (done) => {
    expect(Array.isArray(data)).toBe(true);

    done();
  });
});


