import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
constructor(private http:HttpClient){

}
  
imageSelected(event){
console.log(event);
  let myImage= event.target.files[0] ;
  
  let  fd:FormData=new FormData();
  fd.append('file',myImage);
  
  this.http.post<ImageBean>('http://localhost:8067/fileupload',fd).subscribe(
  resp=>{
  console.log(resp.image);
  this.yuklenen=resp.image;
  }
  );
  }

  yuklenen:string;

}

export class ImageBean{
  public id:number;
  public image:string;
}
