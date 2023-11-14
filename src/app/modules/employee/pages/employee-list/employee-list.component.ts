import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employeeArray: any[];

  constructor() {
    this.employeeArray = [
      {
        id: 1,
        fistName: 'Lucas',
        lastName: 'Ramallo',
        country: 'Argentina',
        salary: '2000',
      },
      {
        id: 2,
        fistName: 'Franco',
        lastName: 'Ramirez',
        country: 'Venezuela',
        salary: '2500',
      },
      {
        id: 3,
        fistName: 'Pablo',
        lastName: 'Escobar',
        country: 'Colombia',
        salary: '3000',
      },
    ];

    // this.employeeArray = []
  }
}
