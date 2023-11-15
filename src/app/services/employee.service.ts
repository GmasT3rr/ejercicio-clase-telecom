import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../modules/employee/pages/employee/employee.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>('http://localhost:3000/employees', {
      responseType: 'json',
    });
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`, {});
    // return this.http.get<Employee>(`http://localhost:3000/employees`, {
    //   // params: new HttpParams().set('id', id),
    //   params: new HttpParams().append('id', id).append('name', 'jorge'),
    // });
  }
}
