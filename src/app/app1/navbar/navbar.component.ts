import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';
import { Store } from '@ngrx/store';
import { setUserData, setUserSignInButtonStatus } from 'src/app/store/app.action';
import { getUserLoggedInData } from 'src/app/store/app.selector';
import { AppState } from 'src/app/store/app.store-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openPopupExcel:boolean=false
  openPopupExcelTeacher:boolean=false
  isLoading = false;
  
  isUserLoggedIn!:boolean

  constructor(private _router: Router,private _store:Store<AppState>,public _teacher: TeacherService) { }

  ngOnInit(): void {
    this._store.select(getUserLoggedInData).subscribe(userState=>{
      if(userState) this.isUserLoggedIn=true
    })
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

  signInClicked(){
    if(this.isUserLoggedIn)
    this._store.dispatch(setUserData({userLoggedIn:false}))
  else{
      this._store.dispatch(setUserSignInButtonStatus({setButtonClickedStatus:true}))
  }

  }
}
