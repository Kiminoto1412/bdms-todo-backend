import Joi from "joi";

// Validation schema
export const todoSchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().max(255),
    completed: Joi.boolean().required()
});