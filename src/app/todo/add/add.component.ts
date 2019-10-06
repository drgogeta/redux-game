import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromTodo from '../../actions/todo.aaction';
import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {
  input: FormControl;

  constructor(private store1: Store<AppState>) { }

  ngOnInit() {
    this.input = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.input.invalid) {
      return;
    }
    this.store1.dispatch({...new fromTodo.AddTodoAction(this.input.value)});
    this.input.setValue('');
  }

}
