import express, { Request, Response } from "express";
import * as fakerRouter from "./routes/fakerRoute"
import * as modelRouter from "./routes/api"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.options('*', cors());

app.get('/', (req: Request, res: Response) => {
  res.send('<div>Hello World!</div>');
})

app.use("/faker", fakerRouter.router)
app.use("/api", modelRouter.router)

app.listen(30000, () => console.log("listening on port 30000"))