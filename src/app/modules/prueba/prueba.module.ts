import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

@NgModule({
  declarations: [PruebaComponent, AlumnosComponent],
  imports: [CommonModule, PruebaRoutingModule],
})
export class PruebaModule {}
