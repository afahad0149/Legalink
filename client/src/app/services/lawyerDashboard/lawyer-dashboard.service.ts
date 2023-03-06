import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class LawyerDashboardService {
  rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    const token = localStorage.getItem('user')!;
    const parsedToken = JSON.parse(token);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${parsedToken.body.token}`,
      },
    };
    return this.http.get<Ticket[]>(this.rootUrl + '/lawyerDashboard', httpOptions);
  }
}
