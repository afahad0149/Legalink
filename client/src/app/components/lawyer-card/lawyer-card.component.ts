import { Component, Input } from '@angular/core';
import { Lawyer } from 'src/app/models/lawyer.model';

@Component({
  selector: 'app-lawyer-card',
  templateUrl: './lawyer-card.component.html',
  styleUrls: ['./lawyer-card.component.scss']
})
export class LawyerCardComponent {
  @Input() lawyer!: Lawyer
  visitLawyer(id: string) {
    this.navigate([`lawyer/${id}`])
  }
}
