import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../models/task.model';

let tasks: Task[] = [];

export const createTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const now = new Date().toISOString();
  const task: Task = {
    id: uuidv4(),
    title,
    description,
    status: status || 'PENDING',
    createdAt: now,
    updatedAt: now,
  };
  tasks.push(task);
  res.status(201).json(task);
};

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

export const updateTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (status !== undefined) task.status = status;
  task.updatedAt = new Date().toISOString();
  res.json(task);
};

export const deleteTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  const deleted = tasks.splice(index, 1)[0];
  res.json(deleted);
}; 