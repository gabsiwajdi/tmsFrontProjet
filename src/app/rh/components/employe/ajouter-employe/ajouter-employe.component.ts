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
  image: File;
  imageSrc: any;
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
      enfantCharge: ['', Validators.required],
      typeIdentite: ['', Validators.required],
      numIdentite: ['', Validators.required],
      datePieceIdentite: ['', Validators.required],
      posteEmploye: ['', Validators.required],
    });

    this.informationsBanquesForm = this.fb.group({
      image: [''],
      banque: ['', Validators.required],
      rib: ['', Validators.required],
    });

    this.InformationsSupplimentaireForm = this.fb.group({
      permis: ['', Validators.required],
      categoriePermis: [''],
      dateExpirationPermis: [''],
      cnss: ['', Validators.required],
      numImmatriculationSociale: ['', Validators.required],
      description: [''],
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
      dateNaissance: new Date(
        this.InformationsGeneralesForm.value.dateNaissance
      ),
      nationalite: this.InformationsGeneralesForm.value.nationalite,
      situationFamiliale:
        this.InformationsGeneralesForm.value.situationFamiliale,
      enfantCharge: this.InformationsGeneralesForm.value.enfantCharge,
      typeIdentite: this.InformationsGeneralesForm.value.typeIdentite,
      numIdentite: this.InformationsGeneralesForm.value.numIdentite,
      datePieceIdentite: new Date(
        this.InformationsGeneralesForm.value.datePieceIdentite
      ),
      posteEmploye: this.InformationsGeneralesForm.value.posteEmploye,

      image: this.imageSrc ? this.imageSrc.toString('base64') : null,
      banque: this.informationsBanquesForm.value.banque,
      rib: this.informationsBanquesForm.value.rib,

      permis: this.InformationsSupplimentaireForm.value.permis,
      categoriePermis:
        this.InformationsSupplimentaireForm.value.categoriePermis,
      dateExpirationPermis: new Date(
        this.InformationsSupplimentaireForm.value.dateExpirationPermis
      ),
      cnss: this.InformationsSupplimentaireForm.value.cnss,
      numImmatriculationSociale:
        this.InformationsSupplimentaireForm.value.numImmatriculationSociale,
      description: this.InformationsSupplimentaireForm.value.description,
    };

    console.log('Model envoyé au service :', model);

    this.service.creerEmploye(model).subscribe((res: any) => {
      this.employe = res;
      console.log(this.employe);
      Swal.fire({
        icon: 'success',
        text: 'employe ajouté avec succès!',
        timer: 1500,
      });
    });
  }

  choixImage() {
    const imageControl = this.informationsBanquesForm.get('image');
    const file: File = imageControl.value;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
