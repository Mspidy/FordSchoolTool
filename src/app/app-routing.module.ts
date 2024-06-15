import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './app1/navbar/navbar.component';
import { HomeComponent } from './app1/home/home.component';
import { DashboardComponent } from './app1/dashboard/dashboard.component';
import { StudentRegistrationComponent } from './app1/student/student-registration/student-registration.component';
import { AllStudentComponent } from './app1/student/all-student/all-student.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path:'home', component: HomeComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'student-registration', component: StudentRegistrationComponent},
  { path:'student-list', component: AllStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
