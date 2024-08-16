import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  myForm!:FormGroup

  constructor(private router:Router,private service:UserService){}

  ngOnInit(): void {
    this.myForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),this.checkPassword()]),
      role:new FormControl('',[Validators.required])
    })
  }

  checkPassword():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
      if(!control.value){
        return {valueMatched:false}
      }

      if(control.value==this.myForm.controls['password'].value){
        control.setErrors(null)
        return control.errors 
      } 
       
      else return {valueMatched:false}
    }
  }

  
  onSubmit(){
    let payload={
      username:this.myForm.controls['username'].value,
      email:this.myForm.controls['email'].value,
      password:this.myForm.controls['password'].value,
      confirmpassword:this.myForm.controls['confirmpassword'].value,
      role:this.myForm.controls['role'].value
    }
    this.service.addNewUser(payload)
    this.router.navigate(['/sign-in'])
  }

}
