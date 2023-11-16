import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  constructor() {}

  titulo: string = 'Crear empleado:';

  habilitar: boolean = true;

  funcionDelBoton() {
    console.log('Funciono');
  }

}
