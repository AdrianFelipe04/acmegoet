import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaagregarComponent } from './personaagregar.component';

describe('PersonaagregarComponent', () => {
  let component: PersonaagregarComponent;
  let fixture: ComponentFixture<PersonaagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
