import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/model/book';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books:Book[]=[];
  constructor(private router:Router,private bookService:BookService) { }
download:string='';
  ngOnInit() {
    this.download=API_URL+"/filedownload/files/";
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
