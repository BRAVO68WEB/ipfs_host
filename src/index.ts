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

let port : any = 3000;
if(process.env.PORT === undefined){
  port = process.env.PORT
}

app.listen(port,"0.0.0.0", async () => {
  await preCheck()
  console.log("\n")
  console.log('Server is running on port http://%s:%s', "localhost", port);
})

