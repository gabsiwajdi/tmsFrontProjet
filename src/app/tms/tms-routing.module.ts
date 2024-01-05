import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TmsComponent } from './tms.component';

const routes: Routes = [{ path: '', component: TmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmsRoutingModule {}
