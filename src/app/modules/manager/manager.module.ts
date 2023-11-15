import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerListComponent } from './pages/manager-list/manager-list.component';
import { ManagerComponent } from './pages/manager/manager.component';


@NgModule({
  declarations: [
    ManagerListComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
