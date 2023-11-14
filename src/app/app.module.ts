import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLigthDirective } from './core/directives/high-ligth.directive';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent, HighLigthDirective],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
