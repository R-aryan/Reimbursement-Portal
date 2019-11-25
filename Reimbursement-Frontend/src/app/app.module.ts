import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
//import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { UserHeaderComponent } from './user-dashboard/user-header/user-header.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
import { ReimbursementsComponent } from './reimbursements/reimbursements.component';
import { IndividualreimbursementComponent } from './reimbursements/individualreimbursement/individualreimbursement.component';
import { MaterialModule } from './material/material.module';
import { IndividualreimbursementService } from './shared/individualreimbursement.service';
import { ReimbursementListComponent } from './reimbursements/reimbursement-list/reimbursement-list.component';
import { ReimbursementEditComponent } from './reimbursements/reimbursement-edit/reimbursement-edit.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
//import { AdminrListComponent } from './admin-dashborad/adminr-list/adminr-list.component';
import { AdminListComponent } from './admin-dashboard/admin-list/admin-list.component';
import { AdminDeclineComponent } from './admin-dashboard/admin-decline/admin-decline.component';
import { AdminApproveComponent } from './admin-dashboard/admin-approve/admin-approve.component';
import { AdminApprovedListComponent } from './admin-dashboard/admin-approved-list/admin-approved-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegistrationComponent,
    HomeComponent,
    SigninComponent,
    //ReimbursementComponent,
    UserDashboardComponent,
    SignupComponent,
    UserHeaderComponent,
    SuccessfulRegistrationComponent,
    ReimbursementsComponent,
    IndividualreimbursementComponent,
    ReimbursementListComponent,
    ReimbursementEditComponent,
    AdminDashboardComponent,
    //AdminrListComponent,
    AdminListComponent,
    AdminDeclineComponent,
    AdminApproveComponent,
    AdminApprovedListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [IndividualreimbursementService,UserService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[IndividualreimbursementComponent,ReimbursementEditComponent,AdminApproveComponent]
})
export class AppModule { }
  