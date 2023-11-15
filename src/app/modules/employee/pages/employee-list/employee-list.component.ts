import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employeeArray: any[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeArray = res;
    });
  }
}
