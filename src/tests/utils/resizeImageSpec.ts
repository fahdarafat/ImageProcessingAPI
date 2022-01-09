import resizeImage from '../../utils/resizeImage';

describe('Testing image resizing', () => {
    it('should resize fjord image', async () => {
        expect(await resizeImage('fjord.jpg', 250, 700)).toThrow();
    })
})