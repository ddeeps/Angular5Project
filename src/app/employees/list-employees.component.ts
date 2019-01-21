import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[]= [
    {
      id:1,
      name:"Mark",
      gender:"Male",
      email:"mark@gmail.com",
      contactPreference:"Email",
      dateOfBirth:new Date('10/05/1988'),
      department:"IT",
      isActive:true,
      photoPath:"assets/images/man.png"
    },
    {
      id:2,
      name:"Mary",
      gender:"Female",
      email:"mary@gmail.com",
      contactPreference:"Email",
      dateOfBirth:new Date('10/05/1988'),
      department:"IT",
      isActive:true,
      photoPath:"assets/images/woman.png"
    },
    {
      id:3,
      name:"John",
      gender:"Female",
      email:"mary@gmail.com",
      contactPreference:"Email",
      dateOfBirth:new Date('10/05/1988'),
      department:"IT",
      isActive:true,
      photoPath:"assets/images/man1.jpg"
    },
    {
      id:4,
      name:"Sara",
      gender:"Female",
      email:"mary@gmail.com",
      contactPreference:"Email",
      dateOfBirth:new Date('10/05/1988'),
      department:"HR",
      isActive:true,
      photoPath:"assets/images/woman1.png"
    }
]

  constructor() { }

  ngOnInit() {
  }

}
