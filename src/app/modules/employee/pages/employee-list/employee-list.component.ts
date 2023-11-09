import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeArray: any[]

  constructor(){
    this.employeeArray = [
      {
        fistName:'Lucas',
        lastName:'Ramallo',
        country:'Argentina',
        salary:'2000'
      },
      {
        fistName:'Franco',
        lastName:'Ramirez',
        country:'Venezuela',
        salary:'2500'
      },
      {
        fistName:'Pablo',
        lastName:'Escobar',
        country:'Colombia',
        salary:'3000'
      }
    ]

    // this.employeeArray = []
  }


}
