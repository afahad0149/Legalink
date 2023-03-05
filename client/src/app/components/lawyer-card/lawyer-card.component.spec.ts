import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCardComponent } from './lawyer-card.component';

describe('LawyerCardComponent', () => {
  let component: LawyerCardComponent;
  let fixture: ComponentFixture<LawyerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawyerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
