import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './app1/navbar/navbar.component';
import { HomeComponent } from './app1/home/home.component';
import { DashboardComponent } from './app1/dashboard/dashboard.component';
import { StudentRegistrationComponent } from './app1/student/student-registration/student-registration.component';
import { AllStudentComponent } from './app1/student/all-student/all-student.component';
import { SigninComponent } from './signin/signin.component';
import { AllTeacherComponent } from './app1/teacher/all-teacher/all-teacher.component';
import { TeacherRegistrationComponent } from './app1/teacher/teacher-registration/teacher-registration.component';

const routes: Routes = [
  // { path: '', component: NavbarComponent },
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'student-registration', component: StudentRegistrationComponent},
  { path:'student-list', component: AllStudentComponent},
  { path:'sign-in', component: SigninComponent},
  { path:'teacher-list', component: AllTeacherComponent},
  { path:'teacher-registration', component: TeacherRegistrationComponent},
  { path:'**', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
