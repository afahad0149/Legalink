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
    lawyerServiceCategory: new FormControl('All Areas', [Validators.required]),
    lawyerConsultationFee: new FormControl(20000),
  });
  lawyers: Lawyer[] = [];
  filteredLawyers: Lawyer[] = [];
  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getLawyers().subscribe((lawyers) => {
      this.filteredLawyers = lawyers;
      console.log('first', this.filteredLawyers);
      this.lawyers = lawyers.sort(
        ({ consultationFee: a }, { consultationFee: b }) => a - b
      );
      // console.log(this.lawyers);
    });
    this.searchForm.valueChanges.subscribe((cng) => {
      console.log('category', cng.lawyerServiceCategory);
      this.filterLawyers(
        cng.lawyerServiceCategory || 'All Areas',
        cng.lawyerConsultationFee || 20000
      );
    });
  }

  filterLawyers(category: string, fees: number) {
    // console.log('filter called');

    this.filteredLawyers = this.lawyers.filter((lawyer) => {
      if (category === 'All Areas')
        return true && lawyer.consultationFee <= fees;
      return (
        lawyer.serviceCategory === category && lawyer.consultationFee <= fees
      );
    });
  }
}
