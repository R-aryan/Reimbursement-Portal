import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ResponseRecived } from './response.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  res=new ResponseRecived();
  email:string;
  constructor(private router:Router, private userService:UserService,
    private notificationService:NotificationService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe(
      (data:ResponseRecived)=>{
        //console.log(data);
        this.res.email=data.email;
        this.userService.email=data.email;
        localStorage.setItem('userEmail',data.email);
        if(data.isAdmin){
          this.router.navigate(['dashboardAdmin'])
        }
        //this.router.navigate(['reimbursements','claimlist']);
      }
    )
  }

  onLogout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('editMode');
    this.router.navigate(['/home']);
    this.notificationService.success('::Logged Out Successfully..!!');


  }

  onAddClaim(){
    
    this.router.navigate(['reimbursements','create']);
  }

  onGetClaims(){
    this.router.navigate(['reimbursements','claimlist']);
  }

}
