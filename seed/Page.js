const { randomPageSelector, generateNumUpTo } = require('./randomPageSelector');

module.exports.createHeaderImageRecord = (id) => {
  const randomPage = randomPageSelector();
  return `${id},https://steam-fec.s3.amazonaws.com/steam${randomPage}/header-${randomPage}.jpg\n`;
};

module.exports.createMainImageRecords = (id) => {
  const randomPage = randomPageSelector();
  return [...new Array(8)].map((currentelement, index) => {
      return `https://steam-fec.s3.amazonaws.com/steam${randomPage}/main-${randomPage}-${index}.jpg,https://steam-fec.s3.amazonaws.com/steam${randomPage}/thumb-${randomPage}-${index}.jpg,${id}\n`
    })
    .join('');
};

module.exports.createCouchRecord = (id) => {
  const randomPage = randomPageSelector();
  const mainImages = [...new Array(8)].map((currentelement, index) => {
    return JSON.stringify({
      main: `https://steam-fec.s3.amazonaws.com/steam${randomPage}/main-${randomPage}-${index}.jpg`,
      thumb: `https://steam-fec.s3.amazonaws.com/steam${randomPage}/thumb-${randomPage}-${index}.jpg`
    })
  })
  return `${id}\thttps://steam-fec.s3.amazonaws.com/steam${randomPage}/header-${randomPage}.jpg\t[${mainImages}]\n`
}
