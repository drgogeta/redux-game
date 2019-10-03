import {SET_FILTER, ValidFiltes} from '../actions/filter.action';
import {actions} from '../actions/filter.action';

const initialState: ValidFiltes = 0;

export function filterReducer(state = initialState, action: actions): ValidFiltes {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

{

}
