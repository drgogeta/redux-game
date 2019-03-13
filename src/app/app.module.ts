import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemTodoComponent } from './pages/todo/item-todo/item-todo.component';
import { ListTodoComponent } from './pages/todo/list-todo/list-todo.component';
import { FooterTodoComponent } from './pages/todo/footer-todo/footer-todo.component';
import { TodoComponent } from './pages/todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTodoComponent,
    ListTodoComponent,
    FooterTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
