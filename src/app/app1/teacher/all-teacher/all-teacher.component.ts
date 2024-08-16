import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.css']
})
export class AllTeacherComponent implements OnInit {

  teachers: any[] = [];
  constructor(public _tservice: TeacherService) { }

  ngOnInit(): void {
    this.getAllTeachersList()
  }

  getAllTeachersList(){
    this._tservice.getAllTeacherDetails().subscribe((res:any)=>{
      console.log(res)
      this.teachers = res
    }, (err)=>{
      console.log(err)
    })
  }

}
