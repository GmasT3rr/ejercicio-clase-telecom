import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

const routes: Routes = [
  { path: ':id/alumno/:idAlumno', component: PruebaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaRoutingModule {}
