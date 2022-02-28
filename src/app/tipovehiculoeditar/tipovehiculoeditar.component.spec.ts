import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovehiculoeditarComponent } from './tipovehiculoeditar.component';

describe('TipovehiculoeditarComponent', () => {
  let component: TipovehiculoeditarComponent;
  let fixture: ComponentFixture<TipovehiculoeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipovehiculoeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipovehiculoeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
