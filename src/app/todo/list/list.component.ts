import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppReducer} from '../../app.reducer';
import {Observable} from 'rxjs';
import {TodoModel} from '../../models/todo.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  todos: Observable<Array<TodoModel>>;

  constructor(private store1: Store<AppReducer>) { }

  ngOnInit() {
    this.todos = this.store1.pipe(
      map(value => value.todos)
    );
  }

}
