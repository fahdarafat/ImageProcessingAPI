import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
    res.send('Enter File name, Width, and Height of your Image please')
});

export default images;