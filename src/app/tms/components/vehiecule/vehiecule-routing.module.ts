import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehieculeComponent } from './vehiecule.component';
import { AjouterVehieculeComponent } from './ajouter-vehiecule/ajouter-vehiecule.component';
import { ListerVehieculeComponent } from './lister-vehiecule/lister-vehiecule.component';

const routes: Routes = [
  {
    path: '',
    component: VehieculeComponent,
    children: [
      { path: 'Ajouter-Vehiecule', component: AjouterVehieculeComponent },
      { path: 'Lister-Vehiecule', component: ListerVehieculeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehieculeRoutingModule {}
