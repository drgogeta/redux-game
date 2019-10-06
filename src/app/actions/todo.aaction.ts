import {Action} from '@ngrx/store';
import {TodoModel} from '../models/todo.model';

export const ADD_TODO = '[TODO] Add todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_COMPLETE_TODO = '[TODO] Delete complete todo';

export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public text: string) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor(public todo: TodoModel) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public todo: TodoModel) {}
}

export class DeleteCompleteTodoAction implements Action {
  readonly type = DELETE_COMPLETE_TODO;
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public check: boolean) {}
}

export type actions = AddTodoAction |
  EditTodoAction |
  DeleteTodoAction |
  DeleteCompleteTodoAction |
  ToggleTodoAction |
  ToggleAllTodoAction;
