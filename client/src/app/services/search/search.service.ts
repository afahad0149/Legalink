import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  rootUrl = 'http://localhost:3000';
  constructor() {}
}
