// const Image = require('../server/db-models/database');
const { generateCSV, generateJSON } = require('./generateData');

generateCSV();
// creates json file and saves data to mongodb.
// const createJSONData = async function (data) {
//   try {
//     await Image.deleteMany({});
//     let runTime = 0;

//     const start = Date.now();
//     await Image.insertMany(
//       data.map((item) => {
//         return {
//           page: item.page,
//           headerImage: item.headerImage,
//           mainImages: item.mainImages,
//           moreLikeThisImages: item.moreLikeThisImages
//         }
//       })
//     );
//     const end = Date.now();
//     runTime += end - start;

//     return runTime;
//   } catch (err) {
//     console.log('ran into an error')
//     return err;
//   }
// };

// createJSONData(generateData(100))
//   .then(runTime => {
//     console.log('we did it!')
//     console.log(`time to insert 50k records: ${runTime} ms`);
//     console.log(`time to insert 10M records: ${runTime / 50000 * 10000000 / 3.6e+6} hrs`)
//     process.exit();
//   })
//   .catch(err => console.log(err))

// // exported out for mocha/chai test to access
// module.exports.generateData = generateData;

