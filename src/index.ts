import express from 'express';
import routers from './routes';
import missingRoutes from './middleware/missingRoutes.middleware';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'Hello, this is the main api, for the project image process for udacity nanodegree'
  );
});

app.use('/api', routers);

app.use(missingRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
