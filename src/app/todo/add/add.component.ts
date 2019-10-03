import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromTodo from '../../actions/todo.aaction';
import {AppReducer} from '../../app.reducer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {
  input: FormControl;

  constructor(private store1: Store<AppReducer>) { }

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
