import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  postTicket(
    clientId: string,
    clientName: string,
    clientEmail: string,
    lawyerId: string,
    title: string,
    description: string
  ): Observable<Ticket> {
    const token = localStorage.getItem('user')!;
    const parsedToken = JSON.parse(token);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${parsedToken.body.token}`,
      },
    };

    return this.http.post<Ticket>(
      this.rootUrl + '/lawyer/post-ticket',
      {
        clientId,
        clientName,
        clientEmail,
        lawyerId,
        title,
        description,
      },
      httpOptions
    );
  }
}
