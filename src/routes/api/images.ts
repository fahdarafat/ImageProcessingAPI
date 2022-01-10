import express from 'express';
import resizeImage from '../../utils/resizeImage';
// import path from 'path';

const images = express.Router();

images.use('/', resizeImage);


// images.get('/', (req, res) => {
//   resizeImage(
//     req.query.filename as string,
//     req.query.height as string,
//     req.query.width as string
//   ).then(() => {
//     res.sendFile(`resized-${req.query.filename}.jpg`, options, (err) => {
//       console.log(err);
//       res.end();
//     });
//   });
// });

export default images;
