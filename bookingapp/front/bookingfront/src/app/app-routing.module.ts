import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { AddBookComponent } from './component/add-book/add-book.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'books',component:BookListComponent},
  {path:'add-update-book',component:AddBookComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
