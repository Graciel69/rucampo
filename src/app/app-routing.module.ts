import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { CrearInmuebleComponent } from './pages/inmueble/crear-inmueble/crear-inmueble.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'crear-inmueble', component: CrearInmuebleComponent },
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
