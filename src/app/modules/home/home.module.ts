import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { HeaderComponent } from '../../core/header/header.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import {FormsModule} from "@angular/forms";
import { PlayersComponent } from './pages/players/players.component';
import { PlayerItemComponent } from './components/player/player-item/player-item.component';
import {AboutComponent} from "./pages/about/about.component";
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    PlayersComponent,
    PlayerItemComponent,
    AddPlayerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
