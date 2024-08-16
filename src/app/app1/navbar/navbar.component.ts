import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isUserLoggedIn!:boolean

  constructor(private _router: Router,private _store:Store<AppState>) { }

  ngOnInit(): void {
    this._store.select(getUserLoggedInData).subscribe(userState=>{
      if(userState) this.isUserLoggedIn=true
    })
  }

  importStudentData(){
    this.openPopupExcel=true
  }

  closePopup(){
    this.openPopupExcel=false;
    console.log("Hello")
  }

  signInClicked(){
    if(this.isUserLoggedIn)
    this._store.dispatch(setUserData({userLoggedIn:false}))
  else{
      this._store.dispatch(setUserSignInButtonStatus({setButtonClickedStatus:true}))
  }

  }
}
