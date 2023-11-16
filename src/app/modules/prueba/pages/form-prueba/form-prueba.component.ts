import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-prueba',
  templateUrl: './form-prueba.component.html',
  styleUrls: ['./form-prueba.component.css'],
})
export class FormPruebaComponent {
  constructor(private _fb: FormBuilder) {}

  nombre = 'Lucas';
  apellido = new FormControl('');

  // formulario = new FormGroup({
  //   nombre : new FormControl(''),
  //   apellido : new FormControl(''),
  // })

  formulario = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), this.validarNombreEspecifico(/pepe/i)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
  });

  validarNombreEspecifico(name: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = name.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  updateName() {
    this.apellido.setValue('Lucas');
  }

  verForm() {
    console.log('Datos del formulario', this.formulario);
  }

  patchValue() {
    this.formulario.patchValue({
      nombre: 'Jorgito',
    });
  }
}
