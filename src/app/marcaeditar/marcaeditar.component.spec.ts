import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaeditarComponent } from './marcaeditar.component';

describe('MarcaeditarComponent', () => {
  let component: MarcaeditarComponent;
  let fixture: ComponentFixture<MarcaeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
