import { makeAutoObservable } from "mobx";

export class Todo implements ITodo {
    private _id: number;
    isComplited: boolean = false;
    title!: string;
    category!: string;

    constructor(id: number, title: string, category: string) {
        makeAutoObservable(this)
        this._id = id;
        this.setTitle(title)
        this.setCategory(category)
    }

    setTitle(title: string) {
        this.title = title
    }
    
    setCategory(category: string) {
        this.category = category
    }

    get id(): number {
        return this._id
    }
}

export interface ITodo {
    isComplited: boolean;
    title: string;
}