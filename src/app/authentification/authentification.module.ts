import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';


@NgModule({
  declarations: [LoginComponent, RegistreComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
