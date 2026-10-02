import express from 'express';
import '#db';
import postRouter from './routes/postRoutes.ts';

const app = express();
const port = 3000;

app.use(express.json()); //important to have in order to get the data in the req.body for POST and PUT
app.use('/posts', postRouter);

//create the server and listen to port
app.listen(port, () => {
  console.log('server is up and running');
});
