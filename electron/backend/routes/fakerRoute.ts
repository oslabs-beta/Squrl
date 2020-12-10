import express, { Request, Response } from "express";
import { fakerController } from "../controllers/fakerController"
import path from 'path'

export const router = express.Router();

router.post('/create', fakerController.create, (req: Request, res: Response) => {
  res.status(200).json({})
})
router.get('/create', (req: Request, res: Response) => {
  res.status(200).download(path.resolve(__dirname, "Output.sql"))
})