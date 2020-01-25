import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { ImageViewComponent } from './component/image-view/image-view.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    AddBookComponent,
    BookListComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ {
    provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
