import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuPrincipalComponent } from './menu/menu-principal/menu-principal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MenuComponent, MenuPrincipalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [MatDatepickerModule, DatePipe, { provide: MatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
