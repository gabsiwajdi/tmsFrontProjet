import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarburantRoutingModule } from './carburant-routing.module';
import { CarburantComponent } from './carburant.component';


@NgModule({
  declarations: [CarburantComponent],
  imports: [
    CommonModule,
    CarburantRoutingModule
  ]
})
export class CarburantModule { }
