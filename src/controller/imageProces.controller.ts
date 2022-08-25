import { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageProcess = async (req: Request, res: Response): Promise<void> => {
  try {
    const { picName, h, w } = req.params;
    if (fs.existsSync(`images/${picName}_${h}_${w}.jpg`)) {
      res.sendFile(`/${picName}_${h}_${w}.jpg`, {
        root: path.join('./images'),
      });
    } else {
      await sharp(`images/${picName}.jpg`)
        .resize({
          width: parseInt(w),
          height: parseInt(h),
        })
        .toFile(`images/${picName}_${h}_${w}.jpg`);
      res.sendFile(`/${picName}_${h}_${w}.jpg`, {
        root: path.join('./images'),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default imageProcess;
