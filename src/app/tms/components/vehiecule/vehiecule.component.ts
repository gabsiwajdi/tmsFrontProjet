import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiecule',
  templateUrl: './vehiecule.component.html',
  styleUrls: ['./vehiecule.component.scss'],
})
export class VehieculeComponent implements OnInit {
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
