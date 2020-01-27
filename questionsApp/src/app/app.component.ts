import { Component, OnInit } from '@angular/core';
import { StudentQuestion } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studentQuestions:StudentQuestion[]=[];


  ngOnInit(): void {
     let q1:StudentQuestion=new StudentQuestion();
     q1.student='Hüseyn Hüseynli';
     q1.question='String Interpolation nədir?';


     let q2:StudentQuestion=new StudentQuestion();
     q2.student='Hüseyn Nemətli';
     q2.question='NPM nədir?';


     this.studentQuestions.push(q1,q2);

  }


}
