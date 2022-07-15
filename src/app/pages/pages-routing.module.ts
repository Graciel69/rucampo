import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
   

 
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
