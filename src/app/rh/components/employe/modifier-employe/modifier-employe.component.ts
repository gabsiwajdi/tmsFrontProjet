import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/rh/classes/employe';
import { EmployeService } from 'src/app/rh/services/employe.service';
import Swal from 'sweetalert2';

export class table {
  nom: number;
  prenom: string;
  posteEmploye: String;
  categoriePermis: string;
  ville: string;
}

@Component({
  selector: 'app-modifier-employe',
  templateUrl: './modifier-employe.component.html',
  styleUrls: ['./modifier-employe.component.scss'],
})
export class ModifierEmployeComponent implements OnInit {
  dataSource = new MatTableDataSource<table>();

  InformationsEmployeForm: FormGroup;
  nomEmploye: string;
  id: any;
  nom: string = '';
  prenom: string = '';

  ville: string = '';

  employe = new Employe();
  employeAmodifier: any;
  constructor(
    private service: EmployeService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.InformationsEmployeForm = this.fb.group({
      adress: ['', Validators.required],
      tel: ['', Validators.required],
      categoriePermis: [''],
      banque: ['', Validators.required],
      rib: ['', Validators.required],
      situationFamiliale: ['', Validators.required],
      enfantCharge: ['', Validators.required],
      posteEmploye: ['', Validators.required],
      datePieceIdentite: ['', Validators.required],
      dateExpirationPermis: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('idEmployee');
      console.log(id);
      this.id = id;
      this.getInfoEmploye(id);
    });
  }

  // get employe par id
  getInfoEmploye(id: any) {
    this.service.employById(id).subscribe((employe: Employe) => {
      this.infoEmploye(employe);
      this.nomEmploye = employe.nom;
      console.log(employe);
    });
  }

  // recupere les information employe dans les champs pour le modifier
  infoEmploye(data: Employe) {
    this.InformationsEmployeForm.get('adress').setValue(data.adress);
    this.InformationsEmployeForm.get('tel').setValue(data.tel);
    this.InformationsEmployeForm.get('situationFamiliale').setValue(
      data.situationFamiliale
    );
    this.InformationsEmployeForm.get('enfantCharge').setValue(
      data.enfantCharge
    );
    this.InformationsEmployeForm.get('posteEmploye').setValue(
      data.posteEmploye
    );
    this.InformationsEmployeForm.get('datePieceIdentite').setValue(
      new Date(data.datePieceIdentite)
    );

    this.InformationsEmployeForm.get('banque').setValue(data.banque);
    this.InformationsEmployeForm.get('rib').setValue(data.rib);

    this.InformationsEmployeForm.get('categoriePermis').setValue(
      data.categoriePermis
    );
    this.InformationsEmployeForm.get('dateExpirationPermis').setValue(
      data.dateExpirationPermis
    );
  }

  // modifier information employe
  modifierEmploye() {
    const model = {
      idEmployee: (this.employe.idEmployee = this.id),
      adress: this.adress.value,
      tel: this.tel.value,
      posteEmploye: this.posteEmploye.value,
      situationFamiliale: this.situationFamiliale.value,
      enfantCharge: this.enfantCharge.value,
      datePieceIdentite: this.datePieceIdentite.value,
      banque: this.banque.value,
      rib: this.rib.value,
      categoriePermis: this.categoriePermis.value,
      dateExpirationPermis: this.dateExpirationPermis.value,
    };
    console.log('Model envoyé au service :', model);

    this.service.modifierEmploye(model).subscribe(
      (reponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Employe modifier avec succès',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['Menu/Menu-rh/Menu-employe/Lister-employes']);
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'erreur d' + "'" + 'modification',
          showConfirmButton: false,
          timer: 1500,
        });
        throw err;
      }
    );
  }

  // get les formControls

  get adress() {
    return this.InformationsEmployeForm.get('adress');
  }

  get tel() {
    return this.InformationsEmployeForm.get('tel');
  }
  get posteEmploye() {
    return this.InformationsEmployeForm.get('posteEmploye');
  }

  get situationFamiliale() {
    return this.InformationsEmployeForm.get('situationFamiliale');
  }
  get enfantCharge() {
    return this.InformationsEmployeForm.get('enfantCharge');
  }
  get datePieceIdentite() {
    return this.InformationsEmployeForm.get('datePieceIdentite');
  }
  get banque() {
    return this.InformationsEmployeForm.get('banque');
  }
  get categoriePermis() {
    return this.InformationsEmployeForm.get('categoriePermis');
  }
  get rib() {
    return this.InformationsEmployeForm.get('rib');
  }

  get dateExpirationPermis() {
    return this.InformationsEmployeForm.get('dateExpirationPermis');
  }
}
