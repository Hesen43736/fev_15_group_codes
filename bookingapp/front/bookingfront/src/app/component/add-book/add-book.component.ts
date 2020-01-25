import { Component, OnInit } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { Book } from 'src/app/model/book';
import { UploadService } from 'src/app/service/upload.service';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
book:Book=new Book();
  constructor(private uploadService:UploadService,private bookService:BookService) { }

  ngOnInit() {
  }

image:File;

imageSelected(event){
  this.image=event.target.files[0];
  let  fd:FormData=new FormData();
fd.append('file',this.image);

this.uploadService.uploadImage(fd).subscribe(
  resp=>{
    alert('image upload success');
    this.book.image=resp.image;
    console.log('book : '+this.book);
    this.bookService.addBook(this.book).subscribe(
      respBook=>{
        console.log(respBook);
      }
    );
  }
);

}
}
