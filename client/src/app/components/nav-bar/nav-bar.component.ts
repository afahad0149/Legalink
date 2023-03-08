import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isLoggedIn = this.auth.isLoggedIn();
    });
  }

  isLoggedIn = this.auth.isLoggedIn();

  handleLogout() {
    this.auth.logout();
  }
}
