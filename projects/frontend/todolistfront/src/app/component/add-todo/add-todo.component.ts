import { Component, OnInit } from '@angular/core';
import { Task, Category } from 'src/app/model/task';
import { TodoService } from 'src/app/service/todo.service';
import { CategoryService } from 'src/app/service/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
public todo:Task=new Task();
categories:Category[]=[];

  constructor(private todoService:TodoService,
    private categoryService:CategoryService,
    private datePipe:DatePipe) { }

  ngOnInit() {
     this.categoryService.findAll().subscribe(
       resp=>{
         this.categories=resp;


         if(this.todoService.selectedTask==null){
this.todo.category=this.categories[0];
        }else{
          this.todo=this.todoService.selectedTask;
          
        }
        

       }
     );
    
    
  }
  onSaveTodo(){
    
console.log(this.todo);
this.todo.register=this.changeDateToUTC(this.todo.register);
this.todoService.addTodoToBackend(this.todo);



  }

  changeDateToUTC(date:Date):Date{
       
    let dateString = this.datePipe.transform(date, 'yyyy-MM-dd');
     
    date = new Date(dateString);
     
    date.setDate(date.getUTCDate() + 0);
    

    return date; 
  }
}
