import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lawyer } from 'src/app/models/lawyer.model';
import { baseBackendURL } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  rootUrl = baseBackendURL;
  constructor(private http: HttpClient) {}

  getLawyers(): Observable<Lawyer[]> {
    const token = localStorage.getItem('user')!;
    const parsedToken = JSON.parse(token);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${parsedToken.body.token}`,
      },
    };
    return this.http.get<Lawyer[]>(
      this.rootUrl + '/client-search',
      httpOptions
    );
  }
  getSingleLawyer(id: string): Observable<Lawyer> {
    const token = localStorage.getItem('user')!;
    const parsedToken = JSON.parse(token);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${parsedToken.body.token}`,
      },
    };
    return this.http.get<Lawyer>(this.rootUrl + `/lawyer/${id}`, httpOptions);
  }
}
