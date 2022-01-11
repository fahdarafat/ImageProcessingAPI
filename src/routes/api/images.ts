import express from 'express';
import path from 'path';
import resizeImage from '../utils/resizeImage';
import cachedImage from '../utils/cachedImage';

const images = express.Router();

//options parameter for sendFile function
const options = {
  root: path.join(__dirname, '../../../images/resized/'),
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
};
images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
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
    } else if (!fileName) {
      res.send('Please Enter a Image name that exists');
    } else if (!height || !width) {
      res.send('Please provide a height and a width for your image');
      //If these are not undefined then they would have to be a number
    } else if ((width as number) < 1 || (height as number) < 1) {
      res.send('Please provide dimensions that are greater than zero');
    }
  }
);
export default images;
