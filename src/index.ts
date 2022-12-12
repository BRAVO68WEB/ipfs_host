import 'dotenv/config';
import express from 'express';
import router from './routes';

export const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

