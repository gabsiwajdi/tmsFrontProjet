import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { RhComponent } from './rh.component';

@NgModule({
  declarations: [RhComponent],
  imports: [
    CommonModule,
    RhRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
})
export class RhModule {}
