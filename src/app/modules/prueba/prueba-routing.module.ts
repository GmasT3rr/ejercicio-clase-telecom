import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba.component';
import { FormPruebaComponent } from './pages/form-prueba/form-prueba.component';

const routes: Routes = [
  { path: ':id/alumno/:idAlumno', component: PruebaComponent },
  { path: 'form', component: FormPruebaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaRoutingModule {}
