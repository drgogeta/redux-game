import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todo/list/list.component';
import { ItemComponent } from './todo/item/item.component';
import { AddComponent } from './todo/add/add.component';
import {TodoFooterComponent} from './todo/footer/todo-footer.component';

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
