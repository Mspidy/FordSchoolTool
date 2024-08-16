import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  downloadTemplate(): Observable<Blob> {
    return this.http.get('http://127.0.0.1:8000/download-teacher-template/', { responseType: 'blob' }).pipe(
      delay(2000) // Add 2-second delay here
    );
  }

  getAllTeacherDetails(){
    return this.http.get('http://127.0.0.1:8000/teacher-details/')
  }
}
