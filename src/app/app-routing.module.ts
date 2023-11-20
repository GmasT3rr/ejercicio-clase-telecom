import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'empleados',
    canActivate:[isLoggedInGuard],
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: 'gerentes',
    canActivate:[isLoggedInGuard],
    loadChildren: () =>
      import('./modules/manager/manager.module').then((m) => m.ManagerModule),
  },
  {
    path: 'prueba',
    canActivate:[isLoggedInGuard],
    loadChildren: () =>
      import('./modules/prueba/prueba.module').then((m) => m.PruebaModule),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
