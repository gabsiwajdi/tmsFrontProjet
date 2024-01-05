import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuPrincipalComponent } from './menu/menu-principal/menu-principal.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'Menu',
    component: MenuComponent,
    children: [
      { path: 'Menu-Principale', component: MenuPrincipalComponent },
      {
        path: 'Menu-rh',
        loadChildren: () => import('./rh/rh.module').then((m) => m.RhModule),
      },
      {
        path: 'Menu-tms',
        loadChildren: () => import('./tms/tms.module').then((m) => m.TmsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
