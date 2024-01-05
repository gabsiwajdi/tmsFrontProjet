import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmsRoutingModule } from './tms-routing.module';
import { AjouterVehieculeComponent } from './components/vehiecule/ajouter-vehiecule/ajouter-vehiecule.component';
import { ListerVehieculeComponent } from './components/vehiecule/lister-vehiecule/lister-vehiecule.component';
import { AjouterMissionComponent } from './components/mission/ajouter-mission/ajouter-mission.component';
import { ModifierMissionComponent } from './components/mission/modifier-mission/modifier-mission.component';
import { TmsComponent } from './tms.component';


@NgModule({
  declarations: [AjouterVehieculeComponent, ListerVehieculeComponent, AjouterMissionComponent, ModifierMissionComponent, TmsComponent],
  imports: [
    CommonModule,
    TmsRoutingModule
  ]
})
export class TmsModule { }
