import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoService } from 'src/app/service/todo.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 
  constructor(private matDialog:MatDialog,public todoService:TodoService) { }
  ngOnInit() {
  }

  onAddTodo(){
this.matDialog.open(AddTodoComponent);
  }

  
columnDefs = [
  {headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true,width:100},
  {headerName: 'Task', field: 'task', sortable: true, filter: true},
  {headerName: 'Day', field: 'day', sortable: true, filter: true},
  {headerName: 'Register', field: 'register', sortable: true, filter: true},
  {headerName: 'Category', field: 'category.name', sortable: true, filter: true},
  {headerName: 'Status', field: 'status', sortable: true, filter: true}
];
onGridReady(event) {
  this.gridApi = event.api;
  console.log('onGridReady');
}

searchText: string = '';

quickSearch() {
    this.gridApi.setQuickFilter(this.searchText);
}

@ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
private gridApi;
loadRows(){
this.todoService.getAllTodos().subscribe(
  resp=>{
    this.todos=resp;
  }
);
console.log('bu sorgudan sonraki koddur');

}
todos:Task[]=[];
}