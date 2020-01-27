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
    for (let index = 0; index < this.students.length; index++) {
      const s = this.students[index];
      let studentQuestion: StudentQuestion = new StudentQuestion();
      studentQuestion.student = s;
      let questionSize = this.questions.length;
      let rand = Math.random();
      if (rand >= 0.94) {
        rand = 0.94;
      }
      let randomQuestionIndex = rand * questionSize;
      randomQuestionIndex = Number.parseInt(randomQuestionIndex.toFixed(0));
      studentQuestion.question = this.questions[randomQuestionIndex]; 
      this.studentQuestions.push(studentQuestion); 
    }
  }
}
