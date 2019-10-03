import {Action} from '@ngrx/store';

export type ValidFiltes = 0 | 1 | 2;

export const SET_FILTER = '[Filter] Set Filter';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: ValidFiltes) {}
}
export type actions = SetFilterAction;
