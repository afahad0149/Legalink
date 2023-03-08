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
  @Input() isPending: boolean = true;

  constructor(private lawyerDashboardService: LawyerDashboardService) {}

  ngOnInit(): void {
  }

  handleAccept(id: string) {
    const ticket = this.tickets.find((tic) => tic._id === id);
    if (ticket) {
      ticket['state'] = 'active';
      this.lawyerDashboardService.activateTicket(ticket).subscribe((ticket) => {
        this.updateTicketsLocally(ticket);
      });
    }
  }
  handleDelete(id: string) {
    this.lawyerDashboardService.deleteTicket(id).subscribe((ticket) => {
      this.deleteTicketsLocally(id);
    });
  }

  updateTicketsLocally(ticket: Ticket) {
    const ticketIndex = this.tickets.findIndex((tic) => tic._id === ticket._id);
    this.tickets[ticketIndex] = ticket;
  }

  deleteTicketsLocally(id: string) {
    this.tickets = this.tickets.filter((tic) => tic._id !== id);
  }
}
