import { Request, Response } from 'express';

const missingRoutes = (req: Request, res: Response): void => {
  res.send(
    'This route does not exist use /api/images/picture name/height/width to get your results'
  );
};

export default missingRoutes;
