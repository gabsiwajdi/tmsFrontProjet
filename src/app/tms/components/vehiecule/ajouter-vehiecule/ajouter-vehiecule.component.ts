import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-vehiecule',
  templateUrl: './ajouter-vehiecule.component.html',
  styleUrls: ['./ajouter-vehiecule.component.scss'],
})
export class AjouterVehieculeComponent implements OnInit {
  etapeSuivant = false;
  InformationsVehiculeForm: FormGroup;
  informationsSupplimentaireForm: FormGroup;
  informationsEntretienVehiculeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.InformationsVehiculeForm = this.fb.group({
      matricule: ['', Validators.required],
      model: ['', Validators.required],
      couleur: ['', Validators.required],
      categories: ['', Validators.required],
      marque: ['', Validators.required],
      carburant: ['', Validators.required],
    });

    this.informationsSupplimentaireForm = this.fb.group({
      kmactuel: ['', Validators.required],
      chargeUtile: ['', Validators.required],
      longueur: ['', Validators.required],
      largeur: ['', Validators.required],
      hauteur: ['', Validators.required],
      capaciteReservoir: ['', Validators.required],
      reservoir: ['', Validators.required],
    });

    this.informationsEntretienVehiculeForm = this.fb.group({
      datevisite: ['', Validators.required],
      dateassurance: ['', Validators.required],
      datetaxe: [''],
      kilometrageProchainVidangeHuileMoteur: [''],
      kilometrageProchainVidangeLiquideRefroidissement: [''],
      kilometrageProchainChangementFiltreClimatiseur: [''],
      kilometrageProchainVidangeHuileBoiteVitesse: [''],
      kilometrageProchainChangementFiltreCarburant: [''],
      kilometrageProchainChangementBougies: [''],
      kilometrageProchainChangementCourroies: [''],
      kilometrageProchainChangementPneus: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}

  ajouterVehiecule() {}
}
