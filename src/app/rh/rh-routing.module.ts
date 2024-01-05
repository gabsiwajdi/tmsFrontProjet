import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhComponent } from './rh.component';

const routes: Routes = [
  { path: '', component: RhComponent },

  {
    path: 'Menu-employe',
    loadChildren: () =>
      import('./components/employe/employe.module').then(
        (m) => m.EmployeModule
      ),
  },

  {
    path: 'contrat',
    loadChildren: () =>
      import('./components/contrat/contrat.module').then(
        (m) => m.ContratModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhRoutingModule {}
