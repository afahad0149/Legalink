import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StoreModule } from '@ngrx/store';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryAutocompleteComponent } from './components/category-autocomplete/category-autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientSearchPageComponent } from './pages/client-search-page/client-search-page.component';
import { LawyerDashboardPageComponent } from './pages/lawyer-dashboard-page/lawyer-dashboard-page.component';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    SliderComponent,
    CategoryAutocompleteComponent,
    ClientSearchPageComponent,
    LawyerDashboardPageComponent,
    AdminDashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
