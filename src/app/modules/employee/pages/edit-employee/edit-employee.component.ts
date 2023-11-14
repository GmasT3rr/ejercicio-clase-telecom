import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {
  titulo: string = 'Modificar empleado:';

  habilitar: boolean = false;
  id!: number;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.params['id']);
  }

  funcionDelBoton() {
    console.log('Funciono');
  }
}
