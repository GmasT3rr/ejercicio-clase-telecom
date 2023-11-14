import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Alumno = {
  id: number;
  nombre: string;
  apellido: string;
  notas: number[];
};

export type Prueba = {
  id: number;
  nombreMaterial: string;
  profesor: string;
  fecha: Date;
};

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  @Input({ required: true }) alumnos: Alumno[] = [];
  @Input({ alias: 'input_prueba' }) prueba!: Prueba;
  @Output() alumnoClickeado = new EventEmitter();

  triggerOutput(alumno: Alumno) {
    this.alumnoClickeado.emit(alumno);
  }
}
