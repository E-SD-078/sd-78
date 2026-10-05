import express from 'express';
import '#db';
import postRouter from './routes/postRoutes.ts';
import { errorHandler } from '#middleware';
const app = express();
const port = 3000;

// application level middleware
app.use((req, res, next) => {
  console.log('Application level middleware');
  // throw new Error('Throwing error test', { cause: { status: 400 } });
  console.log('Method', req.method, 'on', req.url);
  req.user = { username: 'johnDoe', email: 'j@j.com' };
  next();
});
app.use(express.json()); //important to have in order to get the data in the req.body for POST and PUT
app.use('/posts', postRouter);
app.get('/users', (req, res) => {
  res.json([{ name: 'john' }]);
});
// handle not found errors
app.use('*splat', (req, res, next) => {
  throw new Error('NotFound', { cause: { status: 404 } });
});
//handle all the server errors
app.use(errorHandler);
//create the server and listen to port
app.listen(port, () => {
  console.log('server is up and running');
});
