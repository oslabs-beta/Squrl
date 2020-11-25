import express, {Request, Response} from "express";
import * as fakerRouter from "./routes/fakerRoute"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.options('*', cors());

app.get('/', (req:Request, res: Response)=>{
  console.log('hi')
})

app.use("/faker", fakerRouter.router)

app.listen(30000, ()=>console.log("listening on port 30000"))