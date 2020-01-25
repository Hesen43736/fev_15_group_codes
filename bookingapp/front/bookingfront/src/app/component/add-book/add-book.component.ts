import { Component, OnInit } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { Book } from 'src/app/model/book';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
book:Book=new Book();
  constructor(private uploadService:UploadService) { }

  ngOnInit() {
  }

image:File;

imageSelected(event){
  let image=event.target.files[0];
  let  fd:FormData=new FormData();
fd.append('file',this.image);

this.uploadService.uploadImage(fd);

}
}
