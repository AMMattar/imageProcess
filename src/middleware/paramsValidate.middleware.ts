import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

const paramsValidate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { picName, h, w } = req.params;
  const reg = new RegExp('^[0-9]*$');
  try {
    !fs.existsSync(`images/${picName}.jpg`)
      ? res.send('file does not exist, please check the file name')
      : !reg.test(h) || !reg.test(w)
      ? res.send('height and width should be valid numbers')
      : !parseInt(h) || !parseInt(w)
      ? res.send('height and width should be valid numbers')
      : parseInt(h) < 0 && parseInt(w) < 0
      ? res.send('height and width should be valid numbers')
      : next();
  } catch (error) {
    console.log(error);
  }
};

export default paramsValidate;
