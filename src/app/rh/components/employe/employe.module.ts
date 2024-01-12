import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { AjouterContratComponent } from '../contrat/ajouter-contrat/ajouter-contrat.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { ModifierEmployeComponent } from './modifier-employe/modifier-employe.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    EmployeComponent,
    AjouterContratComponent,
    AjouterEmployeComponent,
    ListeEmployeComponent,
    ModifierEmployeComponent,
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
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
export class EmployeModule {}
