import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { format } from 'url';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm:NgForm;
  user:User;

  constructor(private userService:UserService,private route:Router,
    private accRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
    const val=form.value;
    const pan= val.pannumber.toUpperCase();
    const bname=val.bank.toUpperCase();
    
    const userData= new User(val.fullname , val.email,pan,bname,
      val.accountnumber,val.password,val.repassword);
    
    this.userService.registerUser(userData)
    .subscribe((data)=>{
      console.log(data);
      if(data==null){
        this.route.navigate(['registrationSuccess'])

      }

    },(error)=>{console.log(error)});
    //console.log(pan);


  }

  onCancel(from:NgForm){
    from.reset();
  }

  onHome(){
    this.route.navigate(['home']);
  }

}
