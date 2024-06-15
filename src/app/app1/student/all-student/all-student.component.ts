import { Component, OnInit } from '@angular/core';

// export interface PeriodicElement {
//   id: number;
//   name: string;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {id: 5, name: 'Boron', weight: 10.81, symbol: 'B'},
//   {id: 6, name: 'Carbon', weight: 12.01, symbol: 'C'},
//   {id: 7, name: 'Nitrogen', weight: 14.01, symbol: 'N'},
//   {id: 8, name: 'Oxygen', weight: 16.00, symbol: 'O'},
//   {id: 9, name: 'Fluorine', weight: 19.00, symbol: 'F'},
//   {id: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'},
// ];

export interface Student {
  id: number;
  name: string;
  weight: number;
  symbol: string;
}

export interface Class {
  name: string;
  students: Student[];
}

const CLASSES_DATA: Class[] = [
  {
    name: '1',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},

    ]
  },
  {
    name: '2',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
    ]
  },
  {
    name: '3',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
    ]
  },
  {
    name: '4',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
    ]
  },
  {
    name: '5',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
    ]
  },
  {
    name: '6',
    students: [
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
      {id: 1, name: 'Student1', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Student2', weight: 4.0026, symbol: 'He'},
    ]
  }
  // add more classes and students as needed
];

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  classes = CLASSES_DATA;
  panelOpenState = false;

  constructor() { }
  params:any

  ngOnInit(): void {
  }

  editElement(student: Student): void {
    console.log('Edit', student);
    // Add your edit logic here
  }

  deleteElement(student: Student): void {
    console.log('Delete', student);
    // Add your delete logic here
  }

}
