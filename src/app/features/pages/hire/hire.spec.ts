import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hire } from './hire';

describe('Hire', () => {
  let component: Hire;
  let fixture: ComponentFixture<Hire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hire],
    }).compileComponents();

    fixture = TestBed.createComponent(Hire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
