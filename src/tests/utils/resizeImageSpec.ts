// import resizeImage from '../../utils/resizeImage';

//After some googling, it seems that there is no way Jasmine can handle the below test because of how promises resolve and reject.
//I've found a thread also where someone was facing the same problem with jest but they have a solution for that. Thread is linked below.
// https://github.com/jasmine/jasmine/issues/1410

// describe('Testing image resizing', () => {
//     it('Should Throw Error if file is not found', async () => {
//         expect(resizeImage('123123123', 500, 500)).toThrow();
//     });
// })
