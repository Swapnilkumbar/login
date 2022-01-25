import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { OrgSettingsComponent } from './org-settings/org-settings.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard]},
  {path: 'opportunities', component: OpportunitiesComponent, canActivate: [AuthGuard]},
  {path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]},
  {path: 'org-settings', component: OrgSettingsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
