// since there are only 145 photos, this function was created to randomly select after page 5 from aws s3 buckets.

exports.randomPageSelector = () => {
  return Math.floor(Math.random() * (5) + 1);
};

exports.generateNumUpTo = (max) => {
  return Math.floor(Math.random() * max + 1);
}