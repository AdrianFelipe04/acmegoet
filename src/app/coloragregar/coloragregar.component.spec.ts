import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoragregarComponent } from './coloragregar.component';

describe('ColoragregarComponent', () => {
  let component: ColoragregarComponent;
  let fixture: ComponentFixture<ColoragregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoragregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoragregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
