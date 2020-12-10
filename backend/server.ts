import express, { Request, Response } from "express";
import * as fakerRouter from "./routes/fakerRoute"
import * as modelRouter from "./routes/api"
import cors from 'cors';

const exp = express();

exp.use(express.json());

exp.use(cors());

exp.options('*', cors());

exp.get('/', (req: Request, res: Response) => {
  res.send('<div>Hello World!</div>');
})

exp.use("/faker", fakerRouter.router)
exp.use("/api", modelRouter.router)

exp.listen(30000, () => console.log("listening on port 30000"))