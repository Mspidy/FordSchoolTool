import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  registrationForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      panCard: ['', Validators.required],
      aadharCard: ['', Validators.required],
      fatherPanCard: [''],
      fatherAadharCard: [''],
      dob: [''],
      previousSchoolName: [''],
      transportToggle: [false]
    });
  }

}
