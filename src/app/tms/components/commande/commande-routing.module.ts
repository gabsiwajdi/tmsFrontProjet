import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande.component';

const routes: Routes = [{ path: '', component: CommandeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeRoutingModule {}
