import express from 'express';
import sharp from 'sharp';
import path from 'path';

// const resizeImage = async (
//   fileName: string,
//   height: string,
//   width: string
// ): Promise<void> => {
//   try {
//     const h: number = parseInt(height);
//     const w: number = parseInt(width);
//     await sharp(path.join(__dirname, `../../images/full/${fileName}.jpg`))
//       .resize(w, h)
//       .toFile(
//         path.join(__dirname, `../../images/resized/resized-${fileName}.jpg`)
//       );
//   } catch (err) {
//     console.log(err);
//   }
// };
const filePath = path.join(__dirname, `../../images/full/`);
const resizedFilePath = path.join(__dirname, `../../images/resized/`);

//options parameter for sendFile function
const options = {
  root: path.join(__dirname, '../../images/resized/'),
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
};

const resizeImage = async (req:express.Request, res:express.Response, next:Function):Promise<void>  => {
  const fileName = req.query.filename ? req.query.filename : undefined;
  const height = parseInt(req.query.height as  string) ? parseInt(req.query.height as string): undefined;
  const width = parseInt(req.query.width as  string) ? parseInt(req.query.width as string): undefined ;
  if( fileName && height && width) {
    try {
      console.log(fileName, height, width);
      await sharp(`${filePath}${fileName}.jpg`).resize(width, height).toFile(`${resizedFilePath}resized-${fileName}.jpg`);
      res.sendFile(`resized-${fileName}.jpg`, options, () => {
        next();
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(req.query);
    console.log(fileName, height, width);
    next();
  }
}


export default resizeImage;
