import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, NopageFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    PagesRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
