import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions:string[]=[];
  students:string[]=[];

  constructor() { 

    this.students.push('Hüseyn Hüseynli','Hüseyn Nemətli',
    'Hüseyn Tahirzadə','Əli Məmmədzadə','Fərid Salmanov',
    'Ünsal Qasımlı','Məmmədcan Caniyev','Mahmud Əliyev');


    this.questions.push(
    'Angular nədir?',
    'Angular-ı necə quraq?',
    'NPM nədir?',
    'CLI nədir?',
    'Angular-da yeni proyekt necə yaradılır?',
    'Angular-da proyekt necə run edilir?',
    'Angular-da proyekti fərqli port adresində necə run edirik?',
    'String İnterpolation nədir?',
    'main.ts faylı haqqında danış',
    'Bootstrap-ı angulara necə qururlar?' );

  }
}
