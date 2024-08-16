import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store-model';
import { getUserSignInButtonStatus, setUserData } from '../store/app.action';
import { getSignInButtonStatus } from '../store/app.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showBanner = true;
  signInButtonClicked:boolean=false;
  mySignInForm!:FormGroup
  listOfUsers:any=[]
  userSignInError!:boolean;

  closeBanner() {
    this.showBanner = false;
  }

  constructor(private service:AuthService,private _store:Store<AppState>,private _router:Router) {
    this._store.select(getSignInButtonStatus).subscribe(buttonClicked=>{
      console.log(buttonClicked)
      this.signInButtonClicked=buttonClicked
    })

   }

   ngOnInit(): void {
    this.mySignInForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  async signInUser(){
    //console.log(this.mySignInForm)

    await this.service.getAuth().subscribe(val=>{
      console.log(val)
      this.listOfUsers=val
      this.checkUser()
    })
  }
  
    checkUser(){
      let findUser=this.listOfUsers.find((user:any)=>user.username==this.mySignInForm.controls['username'].value &&
                                           user.password==this.mySignInForm.controls['password'].value)
    console.log(findUser)
    if(findUser!=undefined){
      this._store.dispatch(setUserData({userLoggedIn:true}))
      this.mySignInForm.reset()
      this._router.navigate(['/home'])
      this.userSignInError=false;
    }
    else{
      this.userSignInError=true;
      this.mySignInForm.reset();
    }

  }
    
}



