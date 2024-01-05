import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent implements OnInit {
  listerEstActive = false;
  ajouterEstActive = false;
  constructor() {}

  ngOnInit(): void {}

  activerLister() {
    this.listerEstActive = true;
    this.ajouterEstActive = false;
  }

  activerAjouter() {
    this.listerEstActive = false;
    this.ajouterEstActive = true;
  }

  onActivate(componentReference) {
    if (componentReference.ajoutTermine) {
      componentReference.ajoutTermine.subscribe((data) => {
        if (data) {
          this.activerLister();
        }
      });
    }
  }
}
