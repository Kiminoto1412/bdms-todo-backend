import { Request, Response, NextFunction } from 'express';
import { todoSchema } from '@/schemas/todoSchema';

// Middleware for validation
export function validateTodo(req: Request, res: Response, next: NextFunction) {
    const { error } = todoSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}
