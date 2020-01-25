import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books:Book[]=[];
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit() {
    this.bookService.findAll().subscribe(
      resp=>{
        this.books=resp;
      }
    );
  }
  onNewBook(){
this.router.navigate(['add-update-book']);
  }
}
