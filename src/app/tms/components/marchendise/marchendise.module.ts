import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarchendiseRoutingModule } from './marchendise-routing.module';
import { MarchendiseComponent } from './marchendise.component';


@NgModule({
  declarations: [MarchendiseComponent],
  imports: [
    CommonModule,
    MarchendiseRoutingModule
  ]
})
export class MarchendiseModule { }
