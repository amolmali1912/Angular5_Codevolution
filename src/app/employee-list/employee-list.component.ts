import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService } from './../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `
   <h2>Employee List:</h2>
   <h3>{{ errorMsg }}</h3>
   <ul *ngFor = "let employee of employees">
      <li>{{ employee.name }}</li>
   </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(public _employeeService : EmployeeServiceService) {  }


  ngOnInit() {
    this._employeeService.getEmployee()
      .subscribe( data => this.employees = data,
                  error => this.errorMsg = error );
  }

}
