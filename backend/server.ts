import express, { Request, Response } from "express";
import * as fakerRouter from "./routes/fakerRoute"
import cors from 'cors';
import * as path from 'path'
import * as axios from 'axios'
import * as fs from 'fs'

const app = express();

app.use(express.json());

app.use(cors());

app.options('*', cors());

app.get('/', (req: Request, res: Response) => {
  res.send('<div>Hello World!</div>');
})

app.use("/faker", fakerRouter.router)

app.listen(30000, () => console.log("listening on port 30000"))