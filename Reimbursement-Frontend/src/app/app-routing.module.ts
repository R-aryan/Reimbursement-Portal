import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
import { ReimbursementsComponent } from './reimbursements/reimbursements.component';
import { IndividualreimbursementComponent } from './reimbursements/individualreimbursement/individualreimbursement.component';
import { ReimbursementListComponent } from './reimbursements/reimbursement-list/reimbursement-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListComponent } from './admin-dashboard/admin-list/admin-list.component';
import { AdminDeclineComponent } from './admin-dashboard/admin-decline/admin-decline.component';
import { AdminApprovedListComponent } from './admin-dashboard/admin-approved-list/admin-approved-list.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path:'register',component:UserRegistrationComponent},

  {path:'registrationSuccess',component:SuccessfulRegistrationComponent,canActivate:[AuthGuard]},

  {path:'dashboard',component:UserDashboardComponent,canActivate:[AuthGuard]},

  {path:'reimbursements',component:ReimbursementsComponent,canActivate:[AuthGuard],children:[
    
    {path:'claimlist',component:ReimbursementListComponent},

    {path:'create',component:IndividualreimbursementComponent},

    
  ]},

  {path:'dashboardAdmin',component:AdminDashboardComponent,canActivate:[AuthGuard],children:[

    {path:'claimslist',component:AdminListComponent},

    {path:'declinedlist',component:AdminDeclineComponent},

    {path:'approvedclaimlist',component:AdminApprovedListComponent},

  ]},

  {path:'signin',component:SigninComponent},

  { path: 'home', component:HomeComponent },
  
  {path:'**',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
