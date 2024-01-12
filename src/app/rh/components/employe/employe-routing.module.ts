import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { ModifierEmployeComponent } from './modifier-employe/modifier-employe.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeComponent,
    children: [
      { path: 'Ajouter-employe', component: AjouterEmployeComponent },
      {
        path: 'Modifer-employe/:idEmployee',
        component: ModifierEmployeComponent,
      },
      { path: 'Lister-employes', component: ListeEmployeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeRoutingModule {}
