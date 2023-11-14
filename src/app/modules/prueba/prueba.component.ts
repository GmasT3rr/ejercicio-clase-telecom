import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno, Prueba } from './pages/alumnos/alumnos.component';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  alumnos: Alumno[] = [];
  pruebas: Prueba[] = [];
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state?.['alumno']);
    this.alumnos = [
      {
        id: 1,
        nombre: 'John',
        apellido: 'Doe',
        notas: [85, 90, 78, 92],
      },
      {
        id: 2,
        nombre: 'Jane',
        apellido: 'Smith',
        notas: [88, 95, 76, 89],
      },
      {
        id: 3,
        nombre: 'Alice',
        apellido: 'Johnson',
        notas: [92, 87, 80, 94],
      },
      {
        id: 4,
        nombre: 'Eva',
        apellido: 'Martinez',
        notas: [78, 85, 90, 88],
      },
      {
        id: 5,
        nombre: 'Carlos',
        apellido: 'Rodriguez',
        notas: [92, 94, 89, 85],
      },
      {
        id: 6,
        nombre: 'Sophie',
        apellido: 'Brown',
        notas: [80, 82, 78, 90],
      },
    ];
    this.pruebas = [
      {
        id: 1,
        nombreMaterial: 'Mathematics',
        profesor: 'Mr. Anderson',
        fecha: new Date('2023-11-14T08:00:00'),
      },
      {
        id: 2,
        nombreMaterial: 'Science',
        profesor: 'Ms. Smith',
        fecha: new Date('2023-11-15T10:30:00'),
      },
      {
        id: 3,
        nombreMaterial: 'History',
        profesor: 'Mr. Davis',
        fecha: new Date('2023-11-16T09:15:00'),
      },
    ];
  }

  alumnoFueClickeado(event: Alumno) {
    console.log(
      `Nos llego el event del hijo. Esta es la data: ${JSON.stringify(event)}`
    );
  }
}
