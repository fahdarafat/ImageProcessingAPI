import express from 'express';
import path from 'path';
import resizeImage from '../../utils/resizeImage';
import cachedImage from '../../utils/cachedImage';

const images = express.Router();

//options parameter for sendFile function
const options = {
  root: path.join(__dirname, '../../../images/resized/'),
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
};
images.get('/', async (req, res) => {
  //check for query parameters and return undefined if they are not provided
  const fileName: string | undefined = (req.query.filename as string)
    ? (req.query.filename as string)
    : undefined;
  const height: number | undefined = parseInt(req.query.height as string)
    ? parseInt(req.query.height as string)
    : undefined;
  const width: number | undefined = parseInt(req.query.width as string)
    ? parseInt(req.query.width as string)
    : undefined;

  if (fileName && height && width) {
    const cached = await cachedImage(fileName);
    if (!cached) {
      try {
        await resizeImage(fileName, height, width);
        res.sendFile(`resized-${fileName}.jpg`, options);
      } catch (err) {
        res.send('The file name you entered is not correct');
      }
    } else {
      res.sendFile(`resized-${fileName}.jpg`, options);
    }
  } else {
    res.send(
      'Please make sure you enter a correct file name and dimensions greater than zero'
    );
  }
});
export default images;
