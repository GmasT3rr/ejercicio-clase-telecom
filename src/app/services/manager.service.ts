import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Manager {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  employees: [{ employeeId: number }];
}

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  getManagers() {
    return this.http.get<Manager[]>('http://localhost:3000/managers', {
      responseType: 'json',
    });
  }

  getManagerById(id: number) {
    return this.http.get<Manager>(`http://localhost:3000/managers/${id}`, {});
  }
}
