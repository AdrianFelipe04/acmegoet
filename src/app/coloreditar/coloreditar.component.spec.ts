import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreditarComponent } from './coloreditar.component';

describe('ColoreditarComponent', () => {
  let component: ColoreditarComponent;
  let fixture: ComponentFixture<ColoreditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoreditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoreditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
