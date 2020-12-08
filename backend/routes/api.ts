import express, { Request, Response } from "express";
import { modelController } from "../controllers/modelController"
import path from 'path'

export const router = express.Router();

router.post('/', modelController.changeDB, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data)
})
router.get('/', modelController.getTableSize, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data)
})
// router.get('/tablesize', modelController.getTableSize, (req : Request, res: Response) =>{
//   res.status(200).json(res.locals.data)
// })
router.get('/cache', modelController.getCachePercentage, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data)
})

router.get('/indexHitRate', modelController.getIndexHitRate, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data)
})

router.get('/indexUsage', modelController.getIndexUsage, (req: Request, res: Response) => {
  res.status(200).json(res.locals.data)
})