import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  
  public findAll() {
    let headerString='Basic '+window.btoa('developia:d123');
    console.log('headerString : '+headerString);
    let headersObject=new HttpHeaders(
      {
        Authorization: headerString
      }
    );

    return this.http.get<Category[]>('http://localhost:8083/categories',{
      headers:headersObject
    });

  }


}
