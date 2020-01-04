import { Injectable } from '@angular/core';
import { Task, Category } from '../model/task';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  selectedTask: Task;

  constructor(private http: HttpClient) { }


  public getAllTodos() {
    return this.http.get<Task[]>('http://localhost:8083/tasks');

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
