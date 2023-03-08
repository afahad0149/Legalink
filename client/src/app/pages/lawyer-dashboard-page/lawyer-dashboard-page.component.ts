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
  ticketsToShow: Ticket[] = [];
  showPending: boolean = true;
  showActive: boolean = false;
  showArchieved: boolean = false;

  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.lawyerDashboardService.getTickets().subscribe((tickets) => {
      // get all tickets for the lawyer currently logged in
      // const lawyerId = JSON.parse(localStorage.getItem('user') || '""').body
      //   .lawyerInfo._id;
      // console.log(lawyerId);
      this.tickets = tickets;

      // filter tickets by the pending state
      this.ticketsToShow = this.getFilteredTickets('pending');
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
    this.ticketsToShow = this.tickets.filter((ticket) => {
      return ticket.state === state;
    });
    // console.log(this.filteredTickets);
    this.ticketsToShow = this.ticketsToShow.sort(
      ({ createdAt: a }, { createdAt: b }) => {
        if (b && a) return a - b;
        else return 0;
      }
    );

    this.ticketsToShow = this.updateTimestamps();

    return this.ticketsToShow;
  }

  updateTimestamps() {
    return this.ticketsToShow.map((tic) => {
      const createdAt = tic['createdAt'] || Date.now();
      let date: string | Date = new Date(createdAt);
      date = date.toDateString();
      // console.log('new-tic', { ...tic, date: date });
      return { ...tic, date: date };
    });
  }
  updateTickets(ticket: Ticket) {
    this.loadData();
  }
  // deleteTicket(tickets: Ticket[]) {
  //   this.filteredTickets = tickets;
  // }
}
