import resizeImage from '../../routes/utils/resizeImage';

describe('Testing image resizing', () => {
  it('Should Throw Error if file is not found', async () => {
    await expectAsync(
      resizeImage('ImageNameThatWillProbablyBeNeverUsed.png', 500, 500)
    ).toBeRejected();
  });
});
