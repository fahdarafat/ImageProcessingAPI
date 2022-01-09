import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  fileName: string,
  height: string,
  width: string
): Promise<void> => {
  try {
    const h: number = parseInt(height);
    const w: number = parseInt(width);
    await sharp(path.join(__dirname, `../../images/full/${fileName}.jpg`))
      .resize(w, h)
      .toFile(
        path.join(__dirname, `../../images/resized/resized-${fileName}.jpg`)
      );
  } catch (err) {
    console.log(err);
  }
};
export default resizeImage;
