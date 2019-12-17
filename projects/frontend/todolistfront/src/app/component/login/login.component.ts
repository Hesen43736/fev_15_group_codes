import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';


@Component({
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
       
    }
username:string='';
password:string='';

realUsername:string='dea';
realPassword:string='1234';
loginButtonPressed(){
   
//console.log('username : '+this.username);
//console.log('password : '+this.password);

  
if(this.username===this.realUsername && this.password===this.realPassword){
console.log('success login');
}else{
    console.log('login failed');
}


}


}
