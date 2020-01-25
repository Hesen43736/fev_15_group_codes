import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageBean } from '../model/image';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UploadService {



  uploadImage(fd: FormData) {
    return this.http.post<ImageBean>(`${API_URL}/fileupload`,fd);
  }

  constructor(private http:HttpClient) { }
}
