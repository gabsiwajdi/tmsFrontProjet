import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TmsComponent } from './tms.component';

const routes: Routes = [
  { path: '', component: TmsComponent },

  {
    path: 'Menu-carburant',
    loadChildren: () =>
      import('./components/carburant/carburant.module').then(
        (m) => m.CarburantModule
      ),
  },

  {
    path: 'Menu-commande',
    loadChildren: () =>
      import('./components/commande/commande.module').then(
        (m) => m.CommandeModule
      ),
  },
  {
    path: 'Menu-entretient',
    loadChildren: () =>
      import('./components/entretient/entretient.module').then(
        (m) => m.EntretientModule
      ),
  },
  {
    path: 'Menu-marchendise',
    loadChildren: () =>
      import('./components/marchendise/marchendise.module').then(
        (m) => m.MarchendiseModule
      ),
  },
  {
    path: 'Menu-mission',
    loadChildren: () =>
      import('./components/mission/mission.module').then(
        (m) => m.MissionModule
      ),
  },
  {
    path: 'Menu-produits',
    loadChildren: () =>
      import('./components/produits/produits.module').then(
        (m) => m.ProduitsModule
      ),
  },
  {
    path: 'Menu-region',
    loadChildren: () =>
      import('./components/region/region.module').then((m) => m.RegionModule),
  },
  {
    path: 'Menu-vehiecule',
    loadChildren: () =>
      import('./components/vehiecule/vehiecule.module').then(
        (m) => m.VehieculeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmsRoutingModule {}
