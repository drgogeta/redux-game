import {TodoModel} from './models/todo.model';

export interface AppReducer {
  todos: Array<TodoModel>;
}
