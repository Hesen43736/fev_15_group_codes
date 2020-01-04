import { Injectable } from '@angular/core';
import { Task, Category } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  selectedTask: Task;

  constructor(private http: HttpClient) { }


  public getAllTodos() {
let headerString='Basic '+window.btoa('developia:d123');
    let headersObject=new HttpHeaders(
      {
        Authorization: headerString
      }
    );
    return this.http.get<Task[]>('http://localhost:8083/tasks',{
      headers:headersObject
    });

  }

  addTodoToBackend(todo: Task) {
    this.http.post<Task>('http://localhost:8083/tasks', todo).subscribe(
      cavab => {
        console.log('new inserted task id = '+cavab);
        alert('tapsiriq ugurla qeydiyyat olundu');
      }, error => {
        console.log(error);
      }
    );
  }

deleteById(id:number){
  return this.http.delete(`http://localhost:8083/tasks/${id}`);
}
}
