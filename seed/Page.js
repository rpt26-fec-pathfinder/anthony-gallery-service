const { randomPageSelector, generateNumUpTo } = require('./randomPageSelector');

module.exports = class Page {
  constructor(pageId) {
    this.page = pageId;
    this.headerImage = '';
    this.mainImages = [];
    this.moreLikeThisImages = [];
    this.randomPage = randomPageSelector();

    this.setHeaderImage();
    this.setMainImages();
    this.setMoreLikeThisImages();
  }

  setHeaderImage() {
    this.headerImage = `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/header-${this.randomPage}.jpg`;
  }

  setMainImages() {
    for (let i = 1; i <= generateNumUpTo(8); i++) {
      this.mainImages.push({
        main: `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/main-${this.randomPage}-${i}.jpg`,
        thumb: `https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/thumb-${this.randomPage}-${i}.jpg`
      });
    }
  }

  setMoreLikeThisImages() {
    for (let i = 0; i < 3; i++) {
      let container = [];
      for (let j = 1; j <= 3; j++) {
        container.push(`https://steam-fec.s3.amazonaws.com/steam${this.randomPage}/morelikethis-${this.randomPage}-${i}-${j}.jpg`)
      }
      this.moreLikeThisImages.push(container);
    }
  }
}