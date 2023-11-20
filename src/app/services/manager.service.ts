import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface Manager {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  employees: Employee[];
}

interface Employee {
  employeeId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  getManagers() {
    // return this.http.get<Manager[]>('http://localhost:3000/managers', {
    //   responseType: 'json',
    // });
    return this.http
      .get<Manager[]>('http://localhost:3000/managers', {
        responseType: 'json',
      })
      .pipe(
        tap((managers: any) => {
          if (!managers || managers.length === 0) {
            throw new Error('There are no managers');
          }
        })
      );
  }

  getManagerById(id: number) {
    return this.http.get<Manager>(`http://localhost:3000/managers/${id}`, {});
  }
}
