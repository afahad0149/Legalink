import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { LawyerDashboardService } from 'src/app/services/lawyerDashboard/lawyer-dashboard.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent {
  @Input() tickets: Ticket[] = [];

  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  handleAccept(id: string) {
    const ticket = this.tickets.find((tic) => tic._id === id);
    if (ticket) {
      this.lawyerDashboardService.activateTicket(ticket).subscribe((ticket) => {
        this.updateTicketsLocally(ticket);
      });
    }
  }
  handleDelete(id: string) {}

  updateTicketsLocally(ticket: Ticket) {
    const ticketIndex = this.tickets.findIndex((tic) => tic._id === ticket._id);
    this.tickets[ticketIndex] = ticket;
  }
}
