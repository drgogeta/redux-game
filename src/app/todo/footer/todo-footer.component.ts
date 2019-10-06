import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Store} from '@ngrx/store';

import {AppState} from '../../app.reducer';

import {SetFilterAction, ValidFilters} from '../../actions/filter.action';
import {DeleteCompleteTodoAction} from '../../actions/todo.aaction';

@Component({
  selector: 'app-todo-foter',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filters: Array<ValidFilters> = ['All', 'Active', 'Completed'];
  concurrentFilter: Observable<ValidFilters>;
  countJobs: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.concurrentFilter = this.store.pipe(
      map(value => value.filter)
    );
    this.countJobs = this.store.pipe(
      map(value => value.todos.filter(todo => !todo.complete).length)
    );
  }

  changeFilter(filter: ValidFilters) {
    this.store.dispatch({...new SetFilterAction(filter)});
  }
  deleteJobsComplete() {
    this.store.dispatch({...new DeleteCompleteTodoAction()});
  }
}
