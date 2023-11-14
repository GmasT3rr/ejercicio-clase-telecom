import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private rt: Router) {}
  irAPrueba() {
    this.rt.navigate(['/prueba', 1, 'alumno', 1], {
      state: {
        alumno: {
          id: 1,
          nombre: 'Ian',
          apellido: 'Majkut',
          notas: [1, 2, 3, 4, 5],
        },
      },
    });
  }
}
