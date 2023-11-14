import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket.model';
import { LawyerDashboardService } from 'src/app/services/lawyerDashboard/lawyer-dashboard.service';
import { ViewTicketModalComponent } from '../view-ticket-modal/view-ticket-modal.component';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent {
  @Input() tickets: Ticket[] = [];
  @Input() isPending: boolean = true;
  @Input() isActive: boolean = false;
  @Input() isArchived: boolean = false;
  @Output() updateTicketsEvent = new EventEmitter();

  constructor(
    private lawyerDashboardService: LawyerDashboardService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  handleUpdate(id: string, state: string) {
    const ticket = this.tickets.find((tic) => tic._id === id);
    if (ticket) {
      ticket['state'] = state;
      this.lawyerDashboardService.updateTicket(ticket).subscribe((ticket) => {
        this.updateTicketsEvent.emit(ticket);
      });
    }
  }

  handleDelete(id: string) {
    const ticket = this.tickets.find((tic) => tic._id === id);
    if (ticket) {
      this.lawyerDashboardService.deleteTicket(ticket).subscribe((ticket) => {
        // console.log(ticket);
        this.updateTicketsEvent.emit(ticket);
      });
    }
  }

  openDialog(ticket: Ticket) {
    // console.log(ticket);
    const dialogRef = this.dialog.open(ViewTicketModalComponent, {
      data: { ticket: ticket },
    });
  }
}
