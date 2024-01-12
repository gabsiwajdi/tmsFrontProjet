import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';


@NgModule({
  declarations: [ProduitsComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
