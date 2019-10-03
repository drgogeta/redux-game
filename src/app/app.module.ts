import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { AddComponent } from './todo/add/add.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todo/list/list.component';
import { ItemComponent } from './todo/item/item.component';
import { TodoFooterComponent } from './todo/footer/todo-footer.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {TodoReducer} from './reducer/todo.reducer';

import {environment} from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    ListComponent,
    ItemComponent,
    AddComponent,
    TodoFooterComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos:  TodoReducer}),
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 5,
      monitor: TodoReducer,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
