import { makeAutoObservable } from 'mobx';
import { Todo } from './components/Todo/Todo';

export class Store {
    category: string = 'Everything'
    static id: number = 0;
    private todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this)
    }
    
    addTodo(todo: Todo) {
        this.todos.push(todo)
        Store.id = this.todos.length;
    }

    removeTodo(id: number) {
        const todoIndex = this.todos?.findIndex(todo => todo.id === id)
        this.todos?.splice(todoIndex, 1)
    }

    toggleTodo(id: number) {
        const todoIndex = this.todos?.findIndex(todo => todo.id === id)
        this.todos[todoIndex].isComplited = !this.todos[todoIndex].isComplited
        console.log(this.todos);
        
    }

    getTodos(filter?: 'complited' | 'not complited') {
        switch (filter) {
            case 'complited':
                return this.todos?.filter(i => !i.isComplited)
            case 'not complited':
                return this.todos?.filter(i => i.isComplited)
            default:
                return this.todos?.filter(i => i.category === this.category || this.category === 'Everything')
        }
    }
}