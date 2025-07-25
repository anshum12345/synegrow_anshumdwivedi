"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskById = exports.updateTaskById = exports.getTaskById = exports.getAllTasks = exports.createTask = void 0;
const uuid_1 = require("uuid");
let tasks = [];
const createTask = (req, res) => {
    const { title, description, status } = req.body;
    const now = new Date().toISOString();
    const task = {
        id: (0, uuid_1.v4)(),
        title,
        description,
        status: status || 'PENDING',
        createdAt: now,
        updatedAt: now,
    };
    tasks.push(task);
    res.status(201).json(task);
};
exports.createTask = createTask;
const getAllTasks = (req, res) => {
    res.json(tasks);
};
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === id);
    if (!task)
        return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};
exports.getTaskById = getTaskById;
const updateTaskById = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find((t) => t.id === id);
    if (!task)
        return res.status(404).json({ message: 'Task not found' });
    if (title !== undefined)
        task.title = title;
    if (description !== undefined)
        task.description = description;
    if (status !== undefined)
        task.status = status;
    task.updatedAt = new Date().toISOString();
    res.json(task);
};
exports.updateTaskById = updateTaskById;
const deleteTaskById = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1)
        return res.status(404).json({ message: 'Task not found' });
    const deleted = tasks.splice(index, 1)[0];
    res.json(deleted);
};
exports.deleteTaskById = deleteTaskById;
