import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  errorMessage = '';

  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.auth.login(email, password).subscribe({
        next: (res) => {
          localStorage.setItem('user', JSON.stringify(res));
          const user = res.body;
          if (user && user.userType === 'client') {
            this.router.navigate(['client-search']);
            console.log('user', user.userType);
          } else if (user && user.userType === 'lawyer') {
            this.router.navigate(['lawyer-dashboard']);
            console.log('user', user.userType);
          } else this.router.navigate(['admin-dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error;
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        },
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
