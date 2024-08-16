import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  registrationForm!: UntypedFormGroup;
  isInvalid:boolean=false
  classes: string[] = [
    'Nursery', 'LKG','UKG','Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'
  ];

  sections: string[] = ['Section A', 'Section B', 'Section C'];

  constructor( private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registrationForm = new UntypedFormGroup({
      name:new UntypedFormControl ('', [Validators.required]),
      fatherName: new UntypedFormControl ('', [Validators.required]),
      motherName: new UntypedFormControl ('', [Validators.required]),
      panCard: new UntypedFormControl(''),
      aadharCard: new UntypedFormControl('' ),
      fatherPanCard: new UntypedFormControl(''),
      fatherAadharCard: new UntypedFormControl(''),
      dob: new UntypedFormControl(''),
      class: new UntypedFormControl('',[this.checkValidStudent()]),
      section: new UntypedFormControl(''),
      previousSchoolName: new UntypedFormControl(''),
      transportToggle: new UntypedFormControl(false)
    });
  }

  toggleChanged(): void {
    if (this.registrationForm.controls['transportToggle']?.value) {
      const config = new MatSnackBarConfig();
      config.duration = 3000; // Duration in milliseconds
      config.horizontalPosition = 'end'; // Align snackbar to the right
      config.verticalPosition = 'center' as MatSnackBarVerticalPosition;

      this.snackBar.open('Transport Charge: Rs 500 added', 'Close', config);
    }
  }

  checkValidStudent():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null=>{
      let regex = /\d+/g;
      let checkValue=this.registrationForm?.get('class')?.value.match(regex)
      if(checkValue>8 && 
    this.registrationForm?.controls['panCard'].value==''){
        this.isInvalid=true        
        return{invalidValue:true}
      }
      else {
        this.isInvalid=false
        control.setErrors(null)
        return control.errors
      }
    }
  }

  onSubmit(){
   console.log(this.registrationForm)
  }
}
