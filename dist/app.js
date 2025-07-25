"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/tasks', task_routes_1.default);
exports.default = app;
