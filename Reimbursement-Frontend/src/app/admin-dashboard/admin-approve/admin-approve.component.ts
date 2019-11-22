import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { ReimbursementDisplayModel } from 'src/app/shared/reimbursementDisplay.model';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

  reimbursementData=new ReimbursementDisplayModel();
  constructor(public adminService:AdminService,
    private notificationService:NotificationService,
  public dialogRef: MatDialogRef<AdminApproveComponent>) { }

  ngOnInit() {
  }

  mapFormData(data){
    this.reimbursementData.id=data.id;
    this.reimbursementData.approvedValue=data.approvedAmount;
    this.reimbursementData.claimDate=new Date();
    this.reimbursementData.currency="";
    this.reimbursementData.dateString="";
    this.reimbursementData.email="";
    this.reimbursementData.reciptAttached="";
    this.reimbursementData.reimbursementType="";
    this.reimbursementData.requestPhase="Approved";
    this.reimbursementData.requestedValue="";

    console.log(this.reimbursementData);

  }

  onSubmit(){
    const val=this.adminService.ApproveForm.value;
    console.log("value is");
    console.log(val);
  if(this.adminService.ApproveForm.valid){

    this.mapFormData(val);
    this.adminService.onPutDeclinedRequest(this.reimbursementData)
    .subscribe((data)=>{
      console.log(data);
    },(error)=>{console.log(error);
    });

   }

   this.onClose();
   this.adminService.ApproveForm.reset();
  //this.rservice.initializeFormGroup();
   this.notificationService.success('::Claim Approved Successfully..!!');
    
  }

  onClose() {
    this.adminService.ApproveForm.reset();
    //this.adminService.initializeFormGroup();
    this.dialogRef.close();
  }

}
