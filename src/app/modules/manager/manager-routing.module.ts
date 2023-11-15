import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './pages/manager/manager.component';
import { ManagerListComponent } from './pages/manager-list/manager-list.component';

const routes: Routes = [
  { path: ':id', component: ManagerComponent },
  { path: '', component: ManagerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
