import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss'],
})
export class DialogueBoxComponent {
  errorMessage = '';
  successMessage = '';
  dialogForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    public dialogRef: MatDialogRef<DialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {}

  handleClose() {
    this.dialogRef.close();
  }

  handleSubmit() {
    const { title, description } = this.dialogForm.value;
    if (title && description) {
      const clientId = JSON.parse(localStorage.getItem('user') || '""').body
        .userToSend._id;
      const clientFirstName = JSON.parse(localStorage.getItem('user') || '""')
        .body.userToSend.firstName;
      const clientLastName = JSON.parse(localStorage.getItem('user') || '""')
        .body.userToSend.lastName;
      const clientEmail = JSON.parse(localStorage.getItem('user') || '""').body
        .userToSend.email;
      // console.log(clientFirstName, clientLastName, clientEmail);
      const clientName = `${clientFirstName} ${clientLastName}`;
      const lawyerId = this.data.id;
      this.ticketService
        .postTicket(clientId, clientName, clientEmail, lawyerId, title, description)
        .subscribe({
          next: (ticket) => {
            this.successMessage = 'Ticket is successfully created';
          },
          error: (err) => {
            this.errorMessage =
              'You have a pending request for this lawyer. Please wait until it is accepted/rejected before sending a new request';
          },
        });
    }
  }

  get title() {
    return this.dialogForm.get('title');
  }

  get description() {
    return this.dialogForm.get('description');
  }
}
