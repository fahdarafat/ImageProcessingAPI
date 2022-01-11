import supertest from 'supertest';
import app from '../../index';
import cachedImage from '../../utils/cachedImage';
import { promises as fs } from 'fs';
import path from 'path';

const request = supertest(app);
describe('Test for Image Caching', () => {
  beforeAll(async () => {
    //Make request and file should be created
    await request.get('/api/images?filename=fjord&height=300&width=300');
  });
  it('Should return true after request has been made for fjord image', async () => {
    // Test cachedImage function
    const cached = await cachedImage('fjord');
    expect(cached).toBe(true);
  });
  afterAll(async () => {
    //Delete File after finishing
    await fs.unlink(
      path.join(__dirname, '../../../images/resized/resized-fjord.jpg')
    );
  });
});
