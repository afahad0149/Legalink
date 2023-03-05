import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Lawyer } from 'src/app/models/lawyer.model';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-client-search-page',
  templateUrl: './client-search-page.component.html',
  styleUrls: ['./client-search-page.component.scss'],
})
export class ClientSearchPageComponent implements OnInit {
  searchForm = this.fb.group({
    lawyerServiceCategory: new FormControl('', [Validators.required]),
    lawyerConsultationFee: new FormControl(500),
  });
  lawyers: Lawyer[] = [];
  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getLawyers().subscribe((lawyers) => {
      this.lawyers = lawyers.sort(
        ({ consultationFee: a }, { consultationFee: b }) => a - b
      );
      console.log(this.lawyers);
    });
  }
}
