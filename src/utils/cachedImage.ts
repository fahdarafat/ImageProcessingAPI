import { promises as fs } from 'fs';
import path from 'path';

const cachedImage = async (fileName: string): Promise<boolean> => {
  try {
    await fs.access(
      path.join(__dirname, `../../images/resized/resized-${fileName}.jpg`)
    );
    return true;
  } catch (err) {
    return false;
  }
};
export default cachedImage;
