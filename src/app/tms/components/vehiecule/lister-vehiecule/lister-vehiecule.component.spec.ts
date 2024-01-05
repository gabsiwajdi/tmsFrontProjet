import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerVehieculeComponent } from './lister-vehiecule.component';

describe('ListerVehieculeComponent', () => {
  let component: ListerVehieculeComponent;
  let fixture: ComponentFixture<ListerVehieculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerVehieculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerVehieculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
