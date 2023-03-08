import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-view-ticket-modal',
  templateUrl: './view-ticket-modal.component.html',
  styleUrls: ['./view-ticket-modal.component.scss'],
})
export class ViewTicketModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewTicketModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ticket: Ticket }
  ) {}
}
