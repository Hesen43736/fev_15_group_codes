import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {

    }
    username: string = '';
    password: string = '';
    loginButtonPressed() {

        let headerString = 'Basic ' + window.btoa(this.username + ':' + this.password);

        let headersObject = new HttpHeaders(
            {
                Authorization: headerString
            }
        );

        this.http.get<boolean>('http://localhost:8083/validations', {
            headers: headersObject
        }).subscribe(
            success => {
                sessionStorage.setItem('authorization', headerString);
              this.router.navigate(['todos']);

            }, error => {
alert('invalid credentials');
            }
        );



    }

    constructor(private http: HttpClient,private router:Router) {

    }
}
