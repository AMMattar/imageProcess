import express from 'express';
import imageProcess from '../controller/imageProces.controller';
import paramsValidate from '../middleware/paramsValidate.middleware';

const routers = express.Router();

routers.get(
  '/images/:picName/:h/:w',
  paramsValidate,
  imageProcess,
  (req: express.Request, res: express.Response): void => {
    res.send('this is now working');
  }
);

export default routers;
