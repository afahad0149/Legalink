import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-category-autocomplete',
  templateUrl: './category-autocomplete.component.html',
  styleUrls: ['./category-autocomplete.component.scss'],
})
export class CategoryAutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [
    'Arbitration',
    'Business/Corporate',
    'Criminal Defense',
    'Employment and Labour',
    'Enviroment',
    'Estate Planning',
    'Family and Divorce',
    'Finance',
    'Immigration',
    'Intellectual Property',
    'Personal Injury',
    'Tax',
  ];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
