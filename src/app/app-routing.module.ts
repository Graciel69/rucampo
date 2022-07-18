import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CrearEncargoComponent } from './pages/encargo/crear-encargo/crear-encargo.component';
import { EncargosComponent } from './pages/encargo/encargos/encargos.component';
import { CrearInmuebleComponent } from './pages/inmueble/crear-inmueble/crear-inmueble.component';
import { InmueblesComponent } from './pages/inmueble/inmuebles/inmuebles.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PedidosComponent } from './pages/pedido/pedidos/pedidos.component';
import { CrearPropietarioComponent } from './pages/propietario/crear-propietario/crear-propietario.component';
import { PropietariosComponent } from './pages/propietario/propietarios/propietarios.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'crear-inmueble', component: CrearInmuebleComponent },
  { path: 'inmuebles', component: InmueblesComponent },
  { path: 'crear-encargo', component: CrearEncargoComponent },
  { path: 'encargos', component: EncargosComponent },
  { path: 'crear-propietario', component: CrearPropietarioComponent },
  { path: 'propietarios', component: PropietariosComponent },
  { path: '**', component: NopageFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
