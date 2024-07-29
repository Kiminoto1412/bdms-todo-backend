import { TodoService } from '@/services/todoService';
import { Request, Response } from 'express';

export class TodoController {
    private todoService: TodoService;

    constructor() {
        this.todoService = new TodoService();
    }

    getAll = (req: Request, res: Response): void => {
        const todos = this.todoService.getAll();
        res.json(todos);
    }

    getById = (req: Request, res: Response): void => {
        const id = parseInt(req.params.id, 10);
        const todo = this.todoService.getById(id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).send('Todo not found');
        }
    }

    create = (req: Request, res: Response): void => {
        const { title } = req.body;
        const newTodo = this.todoService.create(title);
        res.json(newTodo);
    }

    update = (req: Request, res: Response): void => {
        const id = parseInt(req.params.id, 10);
        const { title, completed } = req.body;
        const updatedTodo = this.todoService.update(id, title, completed);
        if (updatedTodo) {
            res.json(updatedTodo);
        } else {
            res.status(404).send('Todo not found');
        }
    }

    delete = (req: Request, res: Response): void => {
        const id = parseInt(req.params.id, 10);
        const success = this.todoService.delete(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send('Todo not found');
        }
    }
}
