import 'dotenv/config';
import express from 'express';
import router from './routes';
import redirect from './routes/redirect.routes';
import preCheck from './helpers/pre-check';


console.log("\nStarting IPFS Host Service \n================================")

export const app: express.Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", redirect)
app.use("/api", router);

app.listen(3000, async () => {
  await preCheck()
  console.log("\n")

  console.log('Server is running on port 3000');
})

