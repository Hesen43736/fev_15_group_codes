import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path:'',component:LoginComponent },
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'todos',component:TodoListComponent,canActivate:[RouteGuardService]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
