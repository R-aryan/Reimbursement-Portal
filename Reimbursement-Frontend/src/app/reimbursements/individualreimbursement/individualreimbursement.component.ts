import { Component, OnInit } from '@angular/core';
import { ReimbursementModel } from 'src/app/shared/reimbursement.model';
import { IndividualreimbursementService } from 'src/app/shared/individualreimbursement.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-individualreimbursement',
  templateUrl: './individualreimbursement.component.html',
  styleUrls: ['./individualreimbursement.component.css']
})
export class IndividualreimbursementComponent implements OnInit {

  reimbursementData=new ReimbursementModel();
 

  
  

  constructor(public rservice: IndividualreimbursementService,
    private notificationService: NotificationService,
    private router:Router,private userService:UserService,public dialogRef: MatDialogRef<IndividualreimbursementComponent>)
     { }
  
     reimbursement_type=this.rservice.reimbursement_type;
     currency= this.rservice.currency;
     email=this.rservice.email;

  ngOnInit() {
    //console.log(this.userService.email);
    console.log(localStorage.getItem('userEmail'));
  }

  


  onClear(){
    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.notificationService.success('::Form Cleared Successfully..!!');

  }

  mapFormData(data:any){

    var date1= data.reimbursementDate.toString();
    this.reimbursementData.email=data.email;
    this.reimbursementData.fullName=data.fullName;
    this.reimbursementData.currency=data.currency;
    this.reimbursementData.reimbursementType=data.reimbursementtype;
    this.reimbursementData.requestedValue=data.rquestedValue;
    this.reimbursementData.claimDate=data.reimbursementDate;
    this.reimbursementData.dateString=date1;

    if(data.uploadImage===""){
      this.reimbursementData.reciptAttached="None";
      //console.log(data.uploadImage);

    }

    else{
      this.reimbursementData.reciptAttached=data.uploadImage.toString();
      //console.log(this.reimbursementData.reciptAttached);
    }
    //console.log(this.reimbursementData.Id);

  }

  onSubmit(){
    var data= this.rservice.form.value;
    
    if (this.rservice.form.valid){ 
      this.mapFormData(data);

      
        this.rservice.onSubmitReimbursementData(this.reimbursementData)
        .subscribe((data)=>{
        console.log(data);
        });

    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.notificationService.success('::Claim Created Successfully..!!');
    this.onClose();
    }  
    
  }

  onBackToDashBoard(){
    this.router.navigate(['dashboard']);
  }

  onClose() {
    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.dialogRef.close();
  }

}
