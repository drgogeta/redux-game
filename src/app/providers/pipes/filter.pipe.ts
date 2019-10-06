import {Pipe, PipeTransform} from '@angular/core';
import {TodoModel} from '../../models/todo.model';
import {ValidFilters} from '../../actions/filter.action';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Array<TodoModel>, args: ValidFilters): Array<TodoModel> {
    switch (args) {
      case 'Active':
        return list.filter(todo => !todo.complete);
      case 'Completed':
        return list.filter(todo => todo.complete);
      default:
        return list;
    }
  }

}
