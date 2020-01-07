import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { LogoutComponent } from './component/logout/logout.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'todos',component:TodoListComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
