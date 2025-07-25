import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { TaskStatus } from '../models/task.model';

const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(['PENDING', 'COMPLETED', 'IN_PROGRESS']).optional(),
});

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const result = taskSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }
  next();
}; 