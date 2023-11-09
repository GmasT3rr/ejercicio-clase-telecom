import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  titulo:string = "Modificar empleado:"

  habilitar:boolean = false

  funcionDelBoton(){
    console.log('Funciono');
  }
}
