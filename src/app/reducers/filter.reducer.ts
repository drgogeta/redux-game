import {SET_FILTER, ValidFilters} from '../actions/filter.action';
import {actions} from '../actions/filter.action';

const initialState: ValidFilters = 'All';

export function filterReducer(state = initialState, action: actions): ValidFilters {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

{

}
