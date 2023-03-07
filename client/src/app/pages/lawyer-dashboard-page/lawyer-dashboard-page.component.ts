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
  filteredTickets: Ticket[] = [];
  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  ngOnInit(): void {
    this.lawyerDashboardService.getTickets().subscribe((tickets) => {
      // get all tickets for the lawyer currently logged in
      const lawyerId = JSON.parse(localStorage.getItem('user') || '""').body
        .lawyerInfo._id;
      console.log(lawyerId);
      this.tickets = tickets.filter((ticket) => ticket.lawyerId === lawyerId);
      // filter tickets by the pending state
      this.filteredTickets = this.getFilteredTickets('pending');
    });
  }

  getFilteredTickets(state: string) {
    this.filteredTickets = this.tickets.filter((ticket) => {
      return ticket.state === state;
    });
    console.log(this.filteredTickets);
    this.filteredTickets = this.filteredTickets.sort(
      ({ createdAt: a }, { createdAt: b }) => {
        if (b && a) return a - b;
        else return 0;
      }
    );
    return this.filteredTickets;
  }
}
