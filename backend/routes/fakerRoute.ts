import express, {Request, Response} from "express";

export const router = express.Router();

router.get('/user', (req : Request, res: Response) =>{
    res.send("<h1>creating user data....</h1>")
})

