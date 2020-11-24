import express, {Request, Response} from "express";
import {fakerController} from "../controllers/fakerController"

export const router = express.Router();

router.get('/user', (req : Request, res: Response) =>{
    res.send("<h1>creating user data....</h1>")
})

router.post('/create', fakerController.create,  (req :Request, res:Response) => {
    res.status(200).json({})
})