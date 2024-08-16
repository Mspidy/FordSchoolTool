import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openPopupExcel:boolean=false
  openPopupExcelTeacher:boolean=false
  isLoading = false;

  constructor(private router: Router, public _teacher: TeacherService) { }

  ngOnInit(): void {
  }

  importStudentData(){
    this.openPopupExcel=true
  }

  importTeacherData(){
    this.openPopupExcelTeacher = true
  }

  closePopup(){
    this.openPopupExcel=false;
    console.log("Hello")
  }

  closePopupTeacher(){
    this.openPopupExcelTeacher = false
  }

  downloadTemplate() {
    this.isLoading = true;
    this._teacher.downloadTemplate().subscribe((response: Blob) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(response);
      link.download = 'teacher_template.xlsx';
      link.click();
      this.isLoading = false;
    }, error => {
      console.error('Error downloading template', error);
      this.isLoading = false;
    });
  }

}
