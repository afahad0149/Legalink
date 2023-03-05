import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ClientSearchPageComponent } from './pages/client-search-page/client-search-page.component';
import { LawyerDashboardPageComponent } from './pages/lawyer-dashboard-page/lawyer-dashboard-page.component';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';

import { LawyerProfileComponent } from './components/lawyer-profile/lawyer-profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'client-search', component: ClientSearchPageComponent },
  { path: 'lawyer-dashboard', component: LawyerDashboardPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardPageComponent },
  { path: 'lawyer/:id', component: LawyerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
