import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehieculeRoutingModule } from './vehiecule-routing.module';
import { VehieculeComponent } from './vehiecule.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AjouterVehieculeComponent } from './ajouter-vehiecule/ajouter-vehiecule.component';

@NgModule({
  declarations: [VehieculeComponent, AjouterVehieculeComponent],
  imports: [
    CommonModule,
    VehieculeRoutingModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableFilterModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    NgxMatFileInputModule,
  ],
})
export class VehieculeModule {}
