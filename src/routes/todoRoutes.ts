import express from 'express';
import { TodoController } from '../controllers/todoController';

const router = express.Router();
const todoController = new TodoController();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: The Todos managing API
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     tags: [Todos]
 *     summary: Get all todos
 *     responses:
 *       200:
 *         description: List of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     tags: [Todos]
 *     summary: Get todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     tags: [Todos]
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'New Todo'
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Todo created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     tags: [Todos]
 *     summary: Update a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'Updated Todo'
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Todo updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     tags: [Todos]
 *     summary: Delete a todo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the todo to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Todo deleted
 *       404:
 *         description: Todo not found
 */

router.get('/todos', todoController.getAll);
router.get('/todos/:id', todoController.getById);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.delete);

export default router;
