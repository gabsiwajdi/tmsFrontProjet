import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVehieculeComponent } from './ajouter-vehiecule.component';

describe('AjouterVehieculeComponent', () => {
  let component: AjouterVehieculeComponent;
  let fixture: ComponentFixture<AjouterVehieculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVehieculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVehieculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
