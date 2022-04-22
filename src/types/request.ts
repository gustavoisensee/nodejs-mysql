import { Request, Response } from 'express'

export type BaseControllerTypes = (req: Request, res: Response) => void;