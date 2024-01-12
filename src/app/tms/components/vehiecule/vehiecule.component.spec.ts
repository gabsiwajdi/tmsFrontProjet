import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehieculeComponent } from './vehiecule.component';

describe('VehieculeComponent', () => {
  let component: VehieculeComponent;
  let fixture: ComponentFixture<VehieculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehieculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehieculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
