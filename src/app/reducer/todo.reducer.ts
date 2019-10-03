import * as mainTodo from '../actions/todo.aaction';
import {TodoModel} from '../models/todo.model';

const initialState: Array<TodoModel> = [];

export function TodoReducer(state = initialState, action: mainTodo.actions): Array<TodoModel> {
  switch (action.type) {
    case mainTodo.ADD_TODO:
      const todo = new TodoModel(action.text);
      return [...initialState, todo];
    default:
      return state;
  }
}
