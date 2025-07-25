"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = void 0;
const zod_1 = require("zod");
const taskSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    status: zod_1.z.enum(['PENDING', 'COMPLETED', 'IN_PROGRESS']).optional(),
});
const validateTask = (req, res, next) => {
    const result = taskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ errors: result.error.issues });
    }
    next();
};
exports.validateTask = validateTask;
