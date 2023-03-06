import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lawyer } from 'src/app/models/lawyer.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lawyer-card',
  templateUrl: './lawyer-card.component.html',
  styleUrls: ['./lawyer-card.component.scss'],
})
export class LawyerCardComponent {
  @Input() lawyer!: Lawyer;

  constructor(private router: Router, public dialog: MatDialog) {}

  visitLawyer(id: string) {
    this.router.navigate([`lawyer/${id}`]);
  }
}
