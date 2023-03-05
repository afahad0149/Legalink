import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCardsComponent } from './lawyer-cards.component';

describe('LawyerCardsComponent', () => {
  let component: LawyerCardsComponent;
  let fixture: ComponentFixture<LawyerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawyerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
