import {Action} from '@ngrx/store';

export type ValidFilters = 'All' | 'Active' | 'Completed';

export const SET_FILTER = '[Filter] Set Filter';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: ValidFilters) {}
}
export type actions = SetFilterAction;
