import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoagregarComponent } from './vehiculoagregar.component';

describe('VehiculoagregarComponent', () => {
  let component: VehiculoagregarComponent;
  let fixture: ComponentFixture<VehiculoagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
