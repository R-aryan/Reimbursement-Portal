import { Component, OnInit } from '@angular/core';
import { UserDashboardComponent } from '../user-dashboard.component';
import { IndividualreimbursementService } from 'src/app/shared/individualreimbursement.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private userdashboard:UserDashboardComponent,private iser:IndividualreimbursementService) { 

  }

  email:string;

  ngOnInit() {
    this.email= localStorage.getItem('userEmail');
  }

  onLogout(){
    this.userdashboard.onLogout();

  }

}
