import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchendiseComponent } from './marchendise.component';

describe('MarchendiseComponent', () => {
  let component: MarchendiseComponent;
  let fixture: ComponentFixture<MarchendiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchendiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchendiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
