import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  @ViewChild(EmployeeFormComponent) employeeFormComponent!: EmployeeFormComponent;

  constructor(private _employeeService:EmployeeService){}

  createEmployee(){
    if(!this.isFormValid) return
    const formValue = this.employeeFormComponent.employeeForm.value
    this.employeeFormComponent.employeeForm.reset()
    this._employeeService.createEmployee(formValue).subscribe()
  }

  get isFormValid(): boolean {
    if (this.employeeFormComponent) return this.employeeFormComponent.employeeForm.valid
    else return false
  }
}
