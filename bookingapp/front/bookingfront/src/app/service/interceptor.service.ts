import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username: string = 'u1';
    let password: string = '1';
    let basicAuthHeaderString: string = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone(

      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }


      }

    );
    return next.handle(request);
  }

  constructor() { }
}
