import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-search-page',
  templateUrl: './client-search-page.component.html',
  styleUrls: ['./client-search-page.component.scss'],
})
export class ClientSearchPageComponent {
  searchForm = this.fb.group({
    lawyerServiceCategory: new FormControl('', [Validators.required]),
    lawyerConsultationFee: new FormControl(500),
  });
  constructor(private fb: FormBuilder) {}
}
