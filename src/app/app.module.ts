import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './modules/employee/components/employee-form/employee-form.component';
import { CreateEmployeeComponent } from './modules/employee/pages/create-employee/create-employee.component';
import { EditEmployeeComponent } from './modules/employee/pages/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './modules/employee/pages/employee-list/employee-list.component';
import { HighLigthDirective } from './core/directives/high-ligth.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeListComponent,
    HighLigthDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
