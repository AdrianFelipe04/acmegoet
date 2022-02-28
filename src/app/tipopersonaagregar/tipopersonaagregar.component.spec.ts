import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopersonaagregarComponent } from './tipopersonaagregar.component';

describe('TipopersonaagregarComponent', () => {
  let component: TipopersonaagregarComponent;
  let fixture: ComponentFixture<TipopersonaagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopersonaagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopersonaagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
