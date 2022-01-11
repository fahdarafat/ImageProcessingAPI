import sharp from 'sharp';
import path from 'path';

const filePath = path.join(__dirname, `../../../images/full/`);
const resizedFilePath = path.join(__dirname, `../../../images/resized/`);

const resizeImage = async (
  fileName: string,
  height: number,
  width: number
): Promise<void> => {
  try {
    await sharp(`${filePath}${fileName}.jpg`)
      .resize(width, height)
      .toFile(`${resizedFilePath}resized-${fileName}.jpg`);
  } catch (err) {
    throw new Error('File not found');
  }
};

export default resizeImage;
