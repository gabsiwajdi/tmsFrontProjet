import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employe } from 'src/app/rh/classes/employe';
import { EmployeService } from 'src/app/rh/services/employe.service';
import Swal from 'sweetalert2';

export class table {
  idEmployee: any;
  nom: string;
  prenom: string;
  posteEmploye: string;
  typeIdentite: string;
  numIdentite: string;
  datePieceIdentite: Date;
  nationalite: string;
  tel: string;
  adress: string;
  dateNaissance: Date;
  image: string;
  ville: string;
  banque: string;
  permis: string;
  dateExpirationPermis: Date;
  situationFamiliale: string;
  enfantCharge: number;
  cnss: string;
  numImmatriculationSociale: string;
  description: string;
  rib: string;
  categoriePermis: string;
}

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.scss'],
})
export class ListeEmployeComponent implements OnInit {
  Employe: any;
  listeEmploye: any;
  nom: string = '';
  prenom: string = '';
  posteEmploye: string = '';
  categoriePermis: string = '';
  ville: string = '';
  displayedColumns: string[] = [
    'editer',
    'nom',
    'prenom',
    'posteEmploye',
    'categoriePermis',
    'ville',
    'Supprimer',
  ];
  filtrform = new FormGroup({
    photoEmploye: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    posteEmploye: new FormControl(''),
    categoriePermis: new FormControl(''),
    ville: new FormControl(''),
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Employe>();

  constructor(private service: EmployeService) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.listerEmployer();
  }
  //liste des employes
  listerEmployer() {
    this.service.listEmployes().subscribe((res: any) => {
      this.listeEmploye = res;
      console.log(res);
      this.listeEmploye = this.listeEmploye.sort((a: any, b: any) =>
        a.id > b.id ? -1 : 1
      );
      this.dataSource.data = res as table[];
      this.listeEmploye.paginator = this.paginator;
    });
  }
  //supprimer un employe
  supprimerEmploye(idEmploye) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le',
      cancelButtonText: 'Non, garde le',
    }).then((result) => {
      if (result.value) {
        this.service.supprimerEmploye(idEmploye).subscribe((res) => {
          this.listerEmployer();
        });
        Swal.fire('Employe Supprimé avec succès!', '', 'success');
        this.listerEmployer();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', '', 'error');
      }
    });
  }

  //filtre employe
  // filtrerla liste des halles
  filtre() {}

  /* // fonction filtrage
  filtrelisteEmploye() {
    this.nom, this.prenom, this.posteEmploye, this.categoriePermis, this.ville;

    this.service
      .filtreEmploye(
        this.nom,
        this.prenom,
        this.posteEmploye,
        this.categoriePermis,
        this.ville
      )
      .subscribe((employe) => {
        console.log(employe); // Vérifiez les résultats retournés par le service.
        this.dataSource = new MatTableDataSource(employe);
      });
  } */
}
