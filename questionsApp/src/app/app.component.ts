import { Component, OnInit } from '@angular/core';
import { StudentQuestion } from './model';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studentQuestions: StudentQuestion[] = [];

  questions: string[] = [];
  students: string[] = [];
  ngOnInit(): void {

  }



  constructor(private questionService: QuestionService) {
    this.students = questionService.students.slice();
    this.questions = questionService.questions.slice();

  }

  shuffleQuestions() {
    this.studentQuestions = [];
    let index = 0;
    let studentSize = this.students.length;
    let questionSize = this.questions.length;
    let counter:number=0;
    while (index < studentSize) {
      const s = this.students[index];
      let studentQuestion: StudentQuestion = new StudentQuestion();
      studentQuestion.student = s;

      let rand = Math.random();
      if (rand >= 0.94) {
        rand = 0.94;
      }
      let randomQuestionIndex = rand * questionSize;
      randomQuestionIndex = Number.parseInt(randomQuestionIndex.toFixed(0));
      let question = this.questions[randomQuestionIndex];
      let exists: boolean = false;
      for (let index = 0; index < this.studentQuestions.length; index++) {
        const e = this.studentQuestions[index];
        if (e.question == question) {
          exists = true; break;
        }
      }
      if(exists){
        counter++;
        console.log('exists : '+counter);
        continue;
      }else{
         studentQuestion.question =question;
         this.studentQuestions.push(studentQuestion);
         index++;
      }

     
     
    }
  }
}
