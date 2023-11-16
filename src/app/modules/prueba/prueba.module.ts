import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { FormPruebaComponent } from './pages/form-prueba/form-prueba.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PruebaComponent, AlumnosComponent, FormPruebaComponent],
  imports: [CommonModule, PruebaRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PruebaModule {}
