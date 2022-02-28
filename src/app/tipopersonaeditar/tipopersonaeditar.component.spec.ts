import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopersonaeditarComponent } from './tipopersonaeditar.component';

describe('TipopersonaeditarComponent', () => {
  let component: TipopersonaeditarComponent;
  let fixture: ComponentFixture<TipopersonaeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopersonaeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopersonaeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
