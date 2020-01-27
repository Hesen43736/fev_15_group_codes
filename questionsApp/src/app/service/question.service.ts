import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: string[] = [];
  students: string[] = [];

  constructor() {

    this.students.push('Hüseyn Hüseynli', 'Hüseyn Nemətli',
      'Hüseyn Tahirzadə', 'Əli Məmmədzadə', 'Fərid Salmanov',
      'Ünsal Qasımlı', 'Məmmədcan Caniyev', 'Mahmud Əliyev');


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
      'Bootstrap-ı angulara necə qururlar?', 
      'Angular-ın hansı versiyaları var?',
       'Angular üçün hansı proqramları qurmaq lazımdır?', 
       'Typescript nədir?', 
       'Typescript ilə javascript arasında nə fərq var?', 
       'Typescript-də massivlər necə yaradılır?', 
       'Typescript-də let və const nə üçündür?', 
       'Typescript-də sinif necə yaradılır?',
       'node_modules qovluğu nə üçündür?',
       'angular.json faylı haqqında danış',
       'package.json faylı haqqında danış',
       'src qovluğu nə üçündür?',
       'assets qovluğu nə üçündür?',
       'app.modules.ts faylı haqqında danış');

  }
}
