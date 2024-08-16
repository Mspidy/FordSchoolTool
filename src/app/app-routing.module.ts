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
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  // { path: '', component: NavbarComponent },
  { path:'', redirectTo:'/sign-in', pathMatch:'full'},
  { path:'home', component: HomeComponent,pathMatch:'full'},
  { path:'dashboard', component: DashboardComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path:'student-registration', component: StudentRegistrationComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path:'student-list', component: AllStudentComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path:'sign-in', component: SigninComponent,pathMatch:'full'},
  {path:'sign-up',component:SignUpComponent,pathMatch:'full'},
  { path:'teacher-list', component: AllTeacherComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path:'teacher-registration', component: TeacherRegistrationComponent,pathMatch:'full',canActivate:[AuthGuard]},
  { path:'**', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
