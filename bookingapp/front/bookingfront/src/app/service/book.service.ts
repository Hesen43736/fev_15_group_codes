import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { API_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService { 

  addBook(book:Book) {
    return this.http.post<Book>(`${API_URL}/books`,book);
  }

  constructor(private http:HttpClient) { }
}
