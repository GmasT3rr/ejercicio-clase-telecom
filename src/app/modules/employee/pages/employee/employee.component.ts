import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

export interface Employee {
  lastName: string;
  firstName: string;
  country: string;
  salary: number;
  id: number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee?: Employee;

  employeeArray: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    // console.log(this.activatedRoute.snapshot.params['id']);
    // this.employeeArray = [
    //   {
    //     id: 1,
    //     firstName: 'Lucas',
    //     lastName: 'Ramallo',
    //     country: 'Argentina',
    //     salary: '2000',
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Franco',
    //     lastName: 'Ramirez',
    //     country: 'Venezuela',
    //     salary: '2500',
    //   },
    //   {
    //     id: 3,
    //     firstName: 'Pablo',
    //     lastName: 'Escobar',
    //     country: 'Colombia',
    //     salary: '3000',
    //   },
    // ];
    // this.employee = this.employeeArray.find(
    //   (employee) => employee.id == this.activatedRoute.snapshot.params['id']
    // );
    // console.log(this.employee);
  }
  ngOnInit(): void {
    this.employeeService
      .getEmployeeById(this.activatedRoute.snapshot.params['id'])
      .subscribe((res) => (this.employee = res));
  }
}
