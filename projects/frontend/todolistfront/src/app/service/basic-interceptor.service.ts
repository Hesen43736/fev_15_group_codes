import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService implements HttpInterceptor{
 
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let headerString: string = 'Basic ' + window.btoa('developia:d123');
    request = request.clone(
      {
        setHeaders: {
          Authorization: headerString
        }
      }
    );
    return next.handle(request);
  }


  constructor() { }
}
