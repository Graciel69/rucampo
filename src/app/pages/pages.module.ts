import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { InmueblesComponent } from './inmueble/inmuebles/inmuebles.component';
import { CrearEncargoComponent } from './encargo/crear-encargo/crear-encargo.component';
import { EncargosComponent } from './encargo/encargos/encargos.component';
import { PedidosComponent } from './pedido/pedidos/pedidos.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { PropietariosComponent } from './propietario/propietarios/propietarios.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    PagesComponent,
    CrearInmuebleComponent,
    InmueblesComponent,
    CrearEncargoComponent,
    EncargosComponent,
    PedidosComponent,
    CrearPropietarioComponent,
    PropietariosComponent,
    AgendaComponent,
    NoticiasComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DashboardComponent, UsersComponent],
})
export class PagesModule {}
