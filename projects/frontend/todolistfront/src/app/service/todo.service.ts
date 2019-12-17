import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
   

  public getAllTodos(){ 
     return  this.http.get<Task[]>('http://localhost:8080/tasks');
    
  }

addTodoToBackend(todo:Task){
this.http.post('http://localhost:8080/tasks',todo).subscribe(
   
);
}


}
