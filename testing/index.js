const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiFiles = require('chai-files');
const { expect } = chai;
const { file } = chaiFiles;
const path = require('path');
const fs = require('fs');

// imported server.js for testing purposes
const app = require('../server/server');

// imported seedingScript.js for testing purposes
const generateData = require('../seed/seedingScript');


chai.use(chaiHttp);

describe('1) GET REQUEST FOR images from page ranging 1 through 100!!!', () => {

  // pages 1 to 100
  const randomPage = Math.floor(Math.random() * (100) + 1);

  it('it should GET images', (done) => {

    chai.request(app)
      .get(`/images/${randomPage}`)
      .end((err, res) => {

        const { page, mainImages, moreLikeThisImages } = res.body[0];

        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        expect(page).to.be.equal(`${randomPage}`);
        expect(mainImages).to.be.an('array');
        expect(moreLikeThisImages).to.be.an('array');
        done();
      });
  });
});

describe('2) GET REQUEST from pages less than greater than 100 do NOT exist!!!', () => {

  // pages 101 to 1000
  const randomPage = Math.floor(Math.random() * (901) + 101);

  it('it should return a 404', (done) => {

    chai.request(app)
      .get(`/images/${randomPage}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});


describe('3) Seeding Script Test to ensure data contains 100 items!!!', () => {

  it('it should have 100 items total', (done) => {

    const data = generateData();

    expect(data).to.be.an('array');
    expect(data).to.have.lengthOf(100);
    done();
  });

  it('it should have a "data.json" file that exists', (done) => {

    const dataFilePath = path.join(__dirname, '../seed/data.json');

    expect(file(dataFilePath)).to.exist;
    done();
  });
});