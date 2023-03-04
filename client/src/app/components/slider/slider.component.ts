import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() form!: FormGroup;
  formatLabel(value: number): string {
    if (value >= 1000) {
      if (value % 1000 === 0) return Math.round(value / 1000) + 'k';
      return Math.round(value / 100) / 10 + 'k';
    }
    return `${value}`;
  }
}
