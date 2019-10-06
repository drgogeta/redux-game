import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Store} from '@ngrx/store';

import {AppState} from '../app.reducer';
import {ToggleAllTodoAction} from '../actions/todo.aaction';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  complete: Observable<boolean> = of(false);
  checkComplete: FormControl;

  constructor(private store1: Store<AppState>) {}

  ngOnInit() {
    this.checkComplete = new FormControl();
    this.complete = this.checkComplete.valueChanges.pipe(
      map(value => value),
      tap(value => this.store1.dispatch({...new ToggleAllTodoAction(value)}))
    );
  }

}
