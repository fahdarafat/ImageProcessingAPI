import sharp from 'sharp';
import path from 'path';

const resizeImage = async (fileName: string, height: number, width: number) => {
    try {
        await sharp(`../../images/full/${fileName}`).resize(width, height)
            .toFile(`../../images/resized/resized-${fileName}`).then((d) => {
                console.log(d);
            });
    } catch (err) {
        console.log(err);
    }
}

resizeImage('santamonica.jpg', 100, 100);
export default resizeImage;