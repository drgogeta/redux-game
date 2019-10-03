import * as mainTodo from '../actions/todo.aaction';
import {TodoModel} from '../models/todo.model';

const initialState: Array<TodoModel> = [];

export function TodoReducer(state = initialState, action: mainTodo.actions): Array<TodoModel> {
  switch (action.type) {
    case mainTodo.ADD_TODO:
      const todo = new TodoModel(action.text);
      return [...state, todo];
    case mainTodo.EDIT_TODO:
      return state.map(value => {
        if (value.id === action.todo.id) {
          return {
            ...value,
            text: action.todo.text
          };
        }
        return value;
      });
    case mainTodo.DELETE_TODO:
      return state.filter(value => value.id !== action.todo.id);
    case mainTodo.TOGGLE_TODO:
      return state.map(value => {
        if (value.id === action.id) {
          return {
            ...value,
            complete: !value.complete
          };
        }
        return value;
      });
    case mainTodo.TOGGLE_ALL_TODO:
      return state.map(value => {
        return {
          ...value,
          complete: action.check
        };
      });
    default:
      return state;
  }
}
