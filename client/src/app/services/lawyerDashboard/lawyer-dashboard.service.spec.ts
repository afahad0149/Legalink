import { TestBed } from '@angular/core/testing';

import { LawyerDashboardService } from '../lawyerDashboard/lawyer-dashboard.service';

describe('LawyerDashboardService', () => {
  let service: LawyerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawyerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
