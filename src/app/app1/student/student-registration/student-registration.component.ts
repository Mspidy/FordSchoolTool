import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

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

  toggleChanged(): void {
    if (this.registrationForm.get('transportToggle')?.value) {
      const config = new MatSnackBarConfig();
      config.duration = 3000; // Duration in milliseconds
      config.horizontalPosition = 'end'; // Align snackbar to the right
      config.verticalPosition = 'center' as MatSnackBarVerticalPosition;

      this.snackBar.open('Transport Charge: Rs 500 added', 'Close', config);
    }
  }

}
