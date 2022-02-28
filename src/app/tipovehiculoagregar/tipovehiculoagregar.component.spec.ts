import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculoagregarComponent } from './tipovehiculoagregar.component';

describe('TipovehiculoagregarComponent', () => {
  let component: TipovehiculoagregarComponent;
  let fixture: ComponentFixture<TipovehiculoagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipovehiculoagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovehiculoagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
