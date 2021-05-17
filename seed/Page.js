const { randomPageSelector, generateNumUpTo } = require('./randomPageSelector');

module.exports = class Page {
  constructor(pageId) {
    this.page = pageId;
    this.headerImage = '';
    this.mainImages = [];
    this.randomPage = randomPageSelector();

    this.setHeaderImage();
    this.setMainImages();
  }

  setHeaderImage() {
    this.headerImage = `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/header-${this.randomPage}.jpg`;
  }

  setMainImages() {
    for (let i = 1; i <= generateNumUpTo(8); i++) {
      this.mainImages.push(JSON.stringify({
        main: `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/main-${this.randomPage}-${i}.jpg`,
        thumb: `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/thumb-${this.randomPage}-${i}.jpg`
      }));
    }
  }
}
