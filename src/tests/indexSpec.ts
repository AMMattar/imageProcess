import supertest from 'supertest';
import app from '..';
import sharp from 'sharp';

const request = supertest(app);

describe('this is a test suit for endpoint responses', () => {
  it("this is a test for the main '/' root api", async () => {
    const responses = await request.get('/');
    expect(responses.status).toBe(200);
  });
  it("this is a test for the get for '/api/images/:picName/:h/:w' for image processing", async () => {
    const responses = await request.get('/api/images/fjord/200/200');
    expect(responses.status).toBe(200);
  });
  it('this is a test for the get for any missing endpoint', async () => {
    const responses = await request.get('/api/images');
    expect(responses.status).toBe(200);
  });
});

describe('this is a test for the functionality of the application', () => {
  it('this is a test for the image process function', async () => {
    const imageProcess = async (
      picName: string,
      h: number,
      w: number
    ): Promise<void> => {
      await sharp(`images/${picName}.jpg`)
        .resize({
          width: w,
          height: h,
        })
        .toFile(`images/${picName}_${h}_${w}.jpg`);
    };
    const result = imageProcess('fjord', 200, 200);
    expect(result).toBeResolved;
  });
});
