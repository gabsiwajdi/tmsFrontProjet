import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/rh/services/employe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.scss'],
})
export class AjouterEmployeComponent implements OnInit {
  etapeSuivant = false;
  InformationsGeneralesForm: FormGroup;
  informationsBanquesForm: FormGroup;
  InformationsSupplimentaireForm: FormGroup;
  employe: any;

  constructor(private fb: FormBuilder, private service: EmployeService) {
    this.InformationsGeneralesForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      ville: ['', Validators.required],
      adress: ['', Validators.required],
      tel: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      nationalite: ['', Validators.required],
      situationFamiliale: ['', Validators.required],
      enfantEnCharge: ['', Validators.required],
      pieceIdentite: ['', Validators.required],
      numPieceIdentite: ['', Validators.required],
      dateDelivranceIdentite: ['', Validators.required],
      posteEmploye: ['', Validators.required],
    });

    this.informationsBanquesForm = this.fb.group({
      image: [],
      banque: ['', Validators.required],
      rib: ['', Validators.required],
    });

    this.InformationsSupplimentaireForm = this.fb.group({
      permis: ['', Validators.required],
      categoriePermis: [''],
      dateExpirationPermis: [''],
      cnss: ['', Validators.required],
      numImattriculationSociale: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ajouterEmploye() {
    const model = {
      nom: this.InformationsGeneralesForm.value.nom,
      prenom: this.InformationsGeneralesForm.value.prenom,
      ville: this.InformationsGeneralesForm.value.ville,
      adress: this.InformationsGeneralesForm.value.adress,
      tel: this.InformationsGeneralesForm.value.tel,
      dateNaissance: this.InformationsGeneralesForm.value.dateNaissance,
      nationalite: this.InformationsGeneralesForm.value.nationalite,
      situationFamiliale:
        this.InformationsGeneralesForm.value.situationFamiliale,
      enfantEnCharge: this.InformationsGeneralesForm.value.enfantEnCharge,
      pieceIdentite: this.InformationsGeneralesForm.value.pieceIdentite,
      numPieceIdentite: this.InformationsGeneralesForm.value.numPieceIdentite,
      dateDelivranceIdentite:
        this.InformationsGeneralesForm.value.dateDelivranceIdentite,
      posteEmploye: this.InformationsGeneralesForm.value.posteEmploye,

      image: this.informationsBanquesForm.value.image,
      banque: this.informationsBanquesForm.value.banque,
      rib: this.informationsBanquesForm.value.rib,

      permis: this.InformationsSupplimentaireForm.value.permis,
      categoriePermis:
        this.InformationsSupplimentaireForm.value.categoriePermis,
      dateExpirationPermis:
        this.InformationsSupplimentaireForm.value.dateExpirationPermis,
      cnss: this.InformationsSupplimentaireForm.value.cnss,
      numImattriculationSociale:
        this.InformationsSupplimentaireForm.value.numImattriculationSociale,
      description: this.InformationsSupplimentaireForm.value.description,
    };

    console.log('Model envoyé au service :', model);

    this.service.creerEmploye(model).subscribe((res: any) => {
      this.employe = res;
      console.log(this.employe);
      Swal.fire({
        icon: 'success',
        text: 'employe ajouter avec succes!',
        timer: 1500,
      });
    });
  }
}
