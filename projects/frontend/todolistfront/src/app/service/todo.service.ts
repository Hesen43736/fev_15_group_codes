import { Injectable } from '@angular/core';
import { Task, Category, StatusModel } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
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


changeStatusById(id:number,status:string){
  if(status==='Həll olunmayıb'){
    status='Həll olundu';
  }else{
    status='Həll olunmayıb';
  }
  let statusModel:StatusModel=new StatusModel();
  statusModel.status=status;
  return this.http.put(`http://localhost:8083/tasks/change-status/${id}`,statusModel);
}


}
