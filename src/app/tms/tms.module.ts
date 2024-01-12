import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmsRoutingModule } from './tms-routing.module';
import { ListerVehieculeComponent } from './components/vehiecule/lister-vehiecule/lister-vehiecule.component';
import { AjouterMissionComponent } from './components/mission/ajouter-mission/ajouter-mission.component';
import { ModifierMissionComponent } from './components/mission/modifier-mission/modifier-mission.component';
import { TmsComponent } from './tms.component';
import { MissionComponent } from './components/mission/mission.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ListerVehieculeComponent,
    AjouterMissionComponent,
    ModifierMissionComponent,
    TmsComponent,
    MissionComponent,
  ],
  imports: [CommonModule, TmsRoutingModule, MatFormFieldModule],
})
export class TmsModule {}
