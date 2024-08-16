import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app1/navbar/navbar.component';
import { HomeComponent } from './app1/home/home.component';
import { DashboardComponent } from './app1/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { StudentRegistrationComponent } from './app1/student/student-registration/student-registration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllStudentComponent } from './app1/student/all-student/all-student.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SigninComponent } from './signin/signin.component';
import { TeacherRegistrationComponent } from './app1/teacher/teacher-registration/teacher-registration.component';
import { AllTeacherComponent } from './app1/teacher/all-teacher/all-teacher.component';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { stateReducer } from './store/app.reducer';
import { SignUpComponent } from './sign-up/sign-up.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthGuard } from './Services/auth.guard';
import { AuthService } from './Services/auth.service';
import { ToastrModule } from 'ngx-toastr';

const firebaseConfig = {
  apiKey: "AIzaSyCuRMcOz3cYeNXaQH1CIoLqMKwlzS6MZvw",
  authDomain: "school-management-system-6ae80.firebaseapp.com",
  projectId: "school-management-system-6ae80",
  storageBucket: "school-management-system-6ae80.appspot.com",
  messagingSenderId: "227717900942",
  appId: "1:227717900942:web:44cce555db4dcdf56237df"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    StudentRegistrationComponent,
    AllStudentComponent,
    SigninComponent,
    TeacherRegistrationComponent,
    AllTeacherComponent,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    NgxChartsModule,
    FormsModule,
    MatSelectModule,
    StoreModule.forRoot({appMessageSelector:stateReducer},{}),
    ToastrModule.forRoot()
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AuthGuard,
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
