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
  showPending: boolean = true;
  showActive: boolean = false;
  showArchieved: boolean = false;

  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  ngOnInit(): void {
    this.lawyerDashboardService.getTickets().subscribe((tickets) => {
      // get all tickets for the lawyer currently logged in
      const lawyerId = JSON.parse(localStorage.getItem('user') || '""').body
        .lawyerInfo._id;
      // console.log(lawyerId);
      this.tickets = tickets.filter((ticket) => ticket.lawyerId === lawyerId);
      // filter tickets by the pending state
      this.filteredTickets = this.getFilteredTickets('pending');
    });
  }

  getFilteredTickets(state: string) {
    if (state === 'pending') {
      this.showPending = true;
      this.showActive = false;
      this.showArchieved = false;
    } else if (state === 'active') {
      this.showPending = false;
      this.showActive = true;
      this.showArchieved = false;
    } else {
      this.showPending = false;
      this.showActive = false;
      this.showArchieved = true;
    }
    this.filteredTickets = this.tickets.filter((ticket) => {
      return ticket.state === state;
    });
    // console.log(this.filteredTickets);
    this.filteredTickets = this.filteredTickets.sort(
      ({ createdAt: a }, { createdAt: b }) => {
        if (b && a) return a - b;
        else return 0;
      }
    );

    this.filteredTickets = this.updateTimestamps();

    return this.filteredTickets;
  }
  updateTimestamps() {
    return this.filteredTickets.map((tic) => {
      const createdAt = tic['createdAt'] || Date.now();
      let date: string | Date = new Date(createdAt);
      date = date.toDateString();
      // console.log('new-tic', { ...tic, date: date });
      return { ...tic, date: date };
    });
  }
}
