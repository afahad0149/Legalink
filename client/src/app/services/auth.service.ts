import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'http://localhost:4020';
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<HttpResponse<User>> {
    return this.http.post<User>(
      this.rootUrl + '/login',
      { email, password },
      { observe: 'response' }
    );
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    userType: string,
    licenseNumber?: string,
    serviceCategory?: string,
    consultationFee?: number,
    almaMater?: string,
    bio?: string
  ): Observable<User> {
    return this.http.post<User>(this.rootUrl + '/register', {
      firstName,
      lastName,
      email,
      phone,
      password,
      userType,
      licenseNumber,
      serviceCategory,
      consultationFee,
      almaMater,
      bio,
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    const token = localStorage.getItem('accessToken');
    return token ? true : false;
  }
}
