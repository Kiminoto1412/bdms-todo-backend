export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoModel {
    private todos: Todo[] = [];

    getAll(): Todo[] {
        return this.todos;
    }

    getById(id: number): Todo | undefined {
        return this.todos.find(todo => todo.id === id);
    }

    create(title: string): Todo {
        const newTodo: Todo = {
            id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
            title,
            completed: false
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    update(id: number, title: string, completed: boolean): Todo | undefined {
        const todo = this.getById(id);
        if (todo) {
            todo.title = title !== undefined ? title : todo.title;
            todo.completed = completed !== undefined ? completed : todo.completed;
        }
        return todo;
    }

    delete(id: number): boolean {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
}
