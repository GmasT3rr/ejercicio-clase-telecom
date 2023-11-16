import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeArray: any[] = [];

  constructor(private employeeService: EmployeeService) {}
  
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeArray = res;
    });
  }
}
