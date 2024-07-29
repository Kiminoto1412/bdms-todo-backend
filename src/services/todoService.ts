import { Todo, TodoModel } from "@/models/todoModel";

export class TodoService {
    private todoModel: TodoModel;

    constructor() {
        this.todoModel = new TodoModel();
    }

    getAll(): Todo[] {
        return this.todoModel.getAll();
    }

    getById(id: number): Todo | undefined {
        return this.todoModel.getById(id);
    }

    create(title: string): Todo {
        return this.todoModel.create(title);
    }

    update(id: number, title: string, completed: boolean): Todo | undefined {
        return this.todoModel.update(id, title, completed);
    }

    delete(id: number): boolean {
        return this.todoModel.delete(id);
    }
}
