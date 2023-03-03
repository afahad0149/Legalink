import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  hidePass = true;
  hideConfirmPass = true;

  errorMessage = '';
  success = false;

  clientRegisterForm = this.fb.group({
    clientFirstName: new FormControl('', [Validators.required]),
    clientLastName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required, Validators.email]),
    clientPhone: new FormControl('', [Validators.required]),
    clientPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    clientConfirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  lawyerRegisterForm = this.fb.group({
    lawyerFirstName: new FormControl('', [Validators.required]),
    lawyerLastName: new FormControl('', [Validators.required]),
    lawyerEmail: new FormControl('', [Validators.required, Validators.email]),
    lawyerPhone: new FormControl('', [Validators.required]),
    lawyerPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    lawyerConfirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    lawyerLicenseNumber: new FormControl('', [Validators.required]),
    lawyerServiceCategory: new FormControl('', [Validators.required]),
    lawyerConsultationFee: new FormControl('', [Validators.required]),
    lawyerAlmaMater: new FormControl('', [Validators.required]),
    lawyerBio: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleClientSubmit() {
    const {
      clientFirstName,
      clientLastName,
      clientEmail,
      clientPhone,
      clientPassword,
      clientConfirmPassword,
    } = this.clientRegisterForm.value;
    if (
      clientFirstName &&
      clientLastName &&
      clientEmail &&
      clientPhone &&
      clientPassword &&
      clientPassword === clientConfirmPassword &&
      clientPassword.length > 5
    ) {
      this.auth
        .register(
          clientFirstName,
          clientLastName,
          clientEmail,
          clientPhone,
          clientPassword,
          'client'
        )
        .subscribe({
          next: () => {
            this.success = true;
            this.clientRegisterForm.reset;
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

  get clientFirstName() {
    return this.clientRegisterForm.get('clientfirstName');
  }

  get clientLastName() {
    return this.clientRegisterForm.get('clientLastName');
  }

  get clientEmail() {
    return this.clientRegisterForm.get('clientEmail');
  }

  get clientPhone() {
    return this.clientRegisterForm.get('clientPhone');
  }

  get clientPassword() {
    return this.clientRegisterForm.get('clientPassword');
  }

  get clientConfirmPassword() {
    return this.clientRegisterForm.get('clientConfirmPassword');
  }

  handleLawyerSubmit() {
    const {
      lawyerFirstName,
      lawyerLastName,
      lawyerEmail,
      lawyerPhone,
      lawyerPassword,
      lawyerConfirmPassword,
      lawyerLicenseNumber,
    } = this.lawyerRegisterForm.value;
    if (
      lawyerFirstName &&
      lawyerLastName &&
      lawyerEmail &&
      lawyerPhone &&
      lawyerPassword &&
      lawyerPassword === lawyerConfirmPassword &&
      lawyerPassword.length > 5 &&
      lawyerLicenseNumber
    ) {
      this.auth
        .register(
          lawyerFirstName,
          lawyerLastName,
          lawyerEmail,
          lawyerPhone,
          lawyerPassword,
          'lawyer',
          lawyerLicenseNumber
        )
        .subscribe({
          next: () => {
            this.success = true;
            this.lawyerRegisterForm.reset;
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

  get lawyerFirstName() {
    return this.lawyerRegisterForm.get('lawyerFirstName');
  }

  get lawyerLastName() {
    return this.lawyerRegisterForm.get('lawyerLastName');
  }

  get lawyerEmail() {
    return this.lawyerRegisterForm.get('lawyerEmail');
  }

  get lawyerPhone() {
    return this.lawyerRegisterForm.get('lawyerPhone');
  }

  get lawyerPassword() {
    return this.lawyerRegisterForm.get('lawyerPassword');
  }

  get lawyerConfirmPassword() {
    return this.lawyerRegisterForm.get('lawyerConfirmPassword');
  }

  get lawyerLicenseNumber() {
    return this.lawyerLicenseNumber.get('lawyerLicenseNumber');
  }
}