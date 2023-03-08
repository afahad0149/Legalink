import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';

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

  @Output() fileUploadEvent = new EventEmitter();

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
    lawyerConsultationFee: new FormControl(500),
    lawyerAlmaMater: new FormControl('', [Validators.required]),
    lawyerBio: new FormControl('', [Validators.required]),
    fileControl: new FormControl(),
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private cloudinary: CloudinaryService,
    private router: Router
  ) {}

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
            this.router.navigate(['login']);
          },
          error: (err) => {
            this.clientRegisterForm.reset;
            this.errorMessage = err.error;
            setTimeout(() => {
              this.errorMessage = '';
            }, 3000);
          },
        });
    }
  }

  get clientFirstName() {
    return this.clientRegisterForm.get('clientFirstName');
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
      lawyerServiceCategory,
      lawyerConsultationFee,
      lawyerAlmaMater,
      lawyerBio,
    } = this.lawyerRegisterForm.value;
    if (
      lawyerFirstName &&
      lawyerLastName &&
      lawyerEmail &&
      lawyerPhone &&
      lawyerPassword &&
      lawyerPassword === lawyerConfirmPassword &&
      lawyerPassword.length > 5 &&
      lawyerLicenseNumber &&
      lawyerServiceCategory &&
      lawyerConsultationFee &&
      lawyerAlmaMater &&
      lawyerBio
    ) {
      const file = this.lawyerRegisterForm.controls.fileControl.value;
      let profilePicUrl =
        'https://res.cloudinary.com/djxuxbxet/image/upload/v1677984596/Legalink-Lawyer/no_profile_pic.jpg';
      if (file) {
        this.cloudinary.cloudUpload(file, file.name).subscribe({
          next: (res: any) => {
            profilePicUrl = res.secure_url;
            this.auth
              .register(
                lawyerFirstName,
                lawyerLastName,
                lawyerEmail,
                lawyerPhone,
                lawyerPassword,
                'lawyer',
                lawyerLicenseNumber,
                lawyerServiceCategory,
                lawyerConsultationFee,
                lawyerAlmaMater,
                lawyerBio,
                profilePicUrl
              )
              .subscribe({
                next: () => {
                  this.success = true;
                  this.lawyerRegisterForm.reset;
                  this.router.navigate(['login']);
                },

                error: (err) => {
                  this.errorMessage = err.error;
                  this.lawyerRegisterForm.reset;
                  setTimeout(() => {
                    this.errorMessage = '';
                  }, 3000);
                },
              });
          },
        });
      } else {
        this.auth
          .register(
            lawyerFirstName,
            lawyerLastName,
            lawyerEmail,
            lawyerPhone,
            lawyerPassword,
            'lawyer',
            lawyerLicenseNumber,
            lawyerServiceCategory,
            lawyerConsultationFee,
            lawyerAlmaMater,
            lawyerBio,
            profilePicUrl
          )
          .subscribe({
            next: () => {
              this.success = true;
              this.lawyerRegisterForm.reset();
              this.router.navigate(['login']);
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
    return this.lawyerRegisterForm.get('lawyerLicenseNumber');
  }

  get lawyerServiceCategory() {
    return this.lawyerRegisterForm.get('lawyerServiceCategory');
  }

  get lawyerConsultationFee() {
    return this.lawyerRegisterForm.get('lawyerConsultationFee');
  }

  get lawyerAlmaMater() {
    return this.lawyerRegisterForm.get('lawyerAlmaMater');
  }

  get lawyerBio() {
    return this.lawyerRegisterForm.get('lawyerBio');
  }
}
