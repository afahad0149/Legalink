import { Component, Input } from '@angular/core';
import { Lawyer } from 'src/app/models/lawyer.model';

@Component({
  selector: 'app-lawyer-cards',
  templateUrl: './lawyer-cards.component.html',
  styleUrls: ['./lawyer-cards.component.scss']
})
export class LawyerCardsComponent {
@Input() lawyers:Lawyer[] = []
}
