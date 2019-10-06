import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {TodoModel} from '../../models/todo.model';

import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  todos: Observable<AppState>;

  constructor(private store1: Store<AppState>) { }

  ngOnInit() {
    this.todos = this.store1;
  }

}
