import {TodoModel} from './models/todo.model';
import {ValidFilters} from './actions/filter.action';

import {ActionReducer, ActionReducerMap} from '@ngrx/store';

import {filterReducer} from './reducers/filter.reducer';
import {TodoReducer} from './reducers/todo.reducer';

export interface AppState {
  todos: Array<TodoModel>;
  filter: ValidFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: TodoReducer,
  filter: filterReducer
};
