import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaeditarComponent } from './personaeditar.component';

describe('PersonaeditarComponent', () => {
  let component: PersonaeditarComponent;
  let fixture: ComponentFixture<PersonaeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaeditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
