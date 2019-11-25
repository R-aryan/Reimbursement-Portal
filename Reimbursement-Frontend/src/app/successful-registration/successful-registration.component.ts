import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-registration',
  templateUrl: './successful-registration.component.html',
  styleUrls: ['./successful-registration.component.css']
})
export class SuccessfulRegistrationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onHome(){
    this.route.navigate(['home']);

  }

  onSignIn(){
    this.route.navigate(['signin'])
  }

}
