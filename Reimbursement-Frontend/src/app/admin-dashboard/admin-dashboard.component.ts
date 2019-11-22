import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router,private notificationService:NotificationService,
    private adminService:AdminService ) { }

  ngOnInit() {
    this.router.navigate(['dashboardAdmin','claimslist']);
  }

  email= localStorage.getItem('userEmail');

  onLogout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('editMode');
    this.router.navigate(['/home']);
    this.notificationService.success('::Logged Out Successfully..!!');


  }

  onPendingRequest(){
    this.router.navigate(['dashboardAdmin','claimslist']);

  }

  onDeclinedRequest(){
    this.router.navigate(['dashboardAdmin','declinedlist']);

  }

  onApprovedRequest(){
    this.router.navigate(['dashboardAdmin','approvedclaimlist']);

  }

}
