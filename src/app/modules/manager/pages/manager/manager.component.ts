import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, mergeMap, switchMap } from 'rxjs';
import { Employee } from 'src/app/modules/employee/pages/employee/employee.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { Manager, ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent {
  manager?: Manager;
  employees: Employee[] = [];
  constructor(
    private managerService: ManagerService,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params['id'];

    //"Normal"
    this.managerService.getManagerById(id).subscribe((manager) => {
      this.manager = manager;
      for (const employeeData of manager.employees) {
        const employeeId = employeeData.employeeId;
        this.employeeService
          .getEmployeeById(employeeId)
          .subscribe((employee) => {
            this.employees.push(employee);
          });
      }
    });
    //Con operadores de RxJs
    // this.managerService.getManagerById(id).subscribe((manager) => {
    //   this.manager = manager;

    //   const employeeObservables = manager.employees.map((employeeData) => {
    //     const employeeId = employeeData.employeeId;
    //     return this.employeeService.getEmployeeById(employeeId);
    //   });

    //   forkJoin(employeeObservables).subscribe((employees) => {
    //     this.employees = employees;
    //   });
    // });

    // this.managerService
    //   .getManagerById(id)
    //   .pipe(
    //     switchMap((manager) => {
    //       this.manager = manager;

    //       const employeeObservables = manager.employees.map((employeeData) => {
    //         const employeeId = employeeData.employeeId;
    //         return this.employeeService.getEmployeeById(employeeId);
    //       });

    //       return forkJoin(employeeObservables);
    //     })
    //   )
    //   .subscribe((employees) => {
    //     this.employees = employees;
    //   });
  }
}
