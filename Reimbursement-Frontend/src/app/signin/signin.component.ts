import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoginError:boolean=false;

  constructor(private userService:UserService,private router :Router,
    private notificationService:NotificationService) { }

  ngOnInit() {
  }
  onSubmit(email,password){
    this.userService.userAuthentication(email,password)
    .subscribe(
      (data:any)=>{
        //console.log(data);
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/dashboard']);
        this.notificationService.success('::Signed In Successfully..!!');

      },
      (err:HttpErrorResponse)=>{
        this.isLoginError=true;

      }
    );



  }

  registerNewUser(){
    this.router.navigate(['register']);
  }

}
