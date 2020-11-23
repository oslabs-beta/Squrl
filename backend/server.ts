import express, {Request, Response} from "express";
import * as fakerRouter from "./routes/fakerRoute"
const app = express();


app.get('/', (req:Request, res: Response)=>{
    res.send('<div>Hello World!</div>');
})

app.use("/faker", fakerRouter.router)

app.listen(30000, ()=>console.log("listening on port 30000"))