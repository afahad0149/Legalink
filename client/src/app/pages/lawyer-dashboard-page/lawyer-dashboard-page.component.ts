import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { LawyerDashboardService } from 'src/app/services/lawyerDashboard/lawyer-dashboard.service';

@Component({
  selector: 'app-lawyer-dashboard-page',
  templateUrl: './lawyer-dashboard-page.component.html',
  styleUrls: ['./lawyer-dashboard-page.component.scss'],
})
export class LawyerDashboardPageComponent {
  tickets: Ticket[] = [];
  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  ngOnInit(): void {
    this.lawyerDashboardService.getTickets().subscribe((tickets) => {
      this.tickets = tickets.sort(({ createdAt: a }, { createdAt: b }) => {
        if (b && a) return b - a;
        else return 0;
      });
    });
  }
}
