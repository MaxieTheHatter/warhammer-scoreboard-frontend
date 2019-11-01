import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodosComponent} from "./components/todos/todos.component";
import {AboutComponent} from "./pages/about/about.component";
import {PlayerComponent} from "./components/player/player.component";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
  path: 'players',
    component: PlayerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
