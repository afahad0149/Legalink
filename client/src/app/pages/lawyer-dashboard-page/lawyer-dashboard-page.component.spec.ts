import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerDashboardPageComponent } from './lawyer-dashboard-page.component';

describe('LawyerDashboardPageComponent', () => {
  let component: LawyerDashboardPageComponent;
  let fixture: ComponentFixture<LawyerDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawyerDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
