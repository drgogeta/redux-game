import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {TodoModel} from '../../models/todo.model';

import {Store} from '@ngrx/store';

import {AppState} from '../../app.reducer';
import {DeleteTodoAction, EditTodoAction, ToggleTodoAction} from '../../actions/todo.aaction';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @ViewChild('textBodilyInput') textBodilyInput: ElementRef;

  textField: FormControl;
  checkField: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.textField = new FormControl(this.todo.complete, Validators.required);
    this.checkField = new FormControl(this.todo.complete);
    this.checkField.valueChanges.subscribe(
      () => this.store.dispatch( {...new ToggleTodoAction( this.todo.id )} ),
      error1 => console.error(error1)
    );
  }

  edit() {
    this.editing = true;
    this.textBodilyInput.nativeElement.select();
  }

  deleteTodo() {
    this.store.dispatch( {...new DeleteTodoAction( this.todo )} );
  }

  finishEdit() {
    this.editing = false;
    this.store.dispatch( {...new EditTodoAction( this.todo )} );
  }

}
