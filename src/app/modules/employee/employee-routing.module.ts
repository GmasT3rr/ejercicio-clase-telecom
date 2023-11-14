import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  { path: 'crear', component: CreateEmployeeComponent },
  { path: ':id', component: EmployeeComponent },
  { path: ':id/modificar', component: EditEmployeeComponent },
  { path: '', component: EmployeeListComponent },
  {
    path: '**',
    redirectTo: '/empleados',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
