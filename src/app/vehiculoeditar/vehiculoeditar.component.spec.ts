import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoeditarComponent } from './vehiculoeditar.component';

describe('VehiculoeditarComponent', () => {
  let component: VehiculoeditarComponent;
  let fixture: ComponentFixture<VehiculoeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
