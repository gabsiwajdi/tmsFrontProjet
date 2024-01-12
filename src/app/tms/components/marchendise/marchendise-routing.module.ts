import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarchendiseComponent } from './marchendise.component';

const routes: Routes = [{ path: '', component: MarchendiseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarchendiseRoutingModule {}
