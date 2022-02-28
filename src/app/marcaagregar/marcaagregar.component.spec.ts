import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaagregarComponent } from './marcaagregar.component';

describe('MarcaagregarComponent', () => {
  let component: MarcaagregarComponent;
  let fixture: ComponentFixture<MarcaagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
