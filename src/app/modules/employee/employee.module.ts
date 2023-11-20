import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeListComponent,
    EmployeeComponent,
  ],
  imports: [CommonModule, EmployeeRoutingModule, ReactiveFormsModule],
})
export class EmployeeModule {}
