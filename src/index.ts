import express from 'express';
import routes from './routes/index';
import morgan from 'morgan';

const app = express();
const PORT = 3000;
const morg = morgan('tiny');

app.use('/api', morg, routes);


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

export default app;
