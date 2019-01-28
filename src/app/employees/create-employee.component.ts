import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  display = "Show";
  dateOfBirth = '12/01/2018'; 
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({}, 
      { containerClass: 'theme-dark-blue',
       showWeekNumbers: false,
       minDate : new Date(2018, 0, 1),
       maxDate : new Date(2018, 11, 31),
       dateInputFormat : 'DD/MM/YYYY'
       }
    );
  }

  ngOnInit() {
  }

  SaveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

  togglePhoto(){
    this.previewPhoto = !this.previewPhoto;
    this.display = this.display == "Show"? "Hide":"Show";
  }

}
