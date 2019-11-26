import { Component, OnInit } from '@angular/core';
import { IndividualreimbursementService } from 'src/app/shared/individualreimbursement.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ReimbursementDisplayModel } from 'src/app/shared/reimbursementDisplay.model';

@Component({
  selector: 'app-reimbursement-edit',
  templateUrl: './reimbursement-edit.component.html',
  styleUrls: ['./reimbursement-edit.component.css']
})
export class ReimbursementEditComponent implements OnInit {

  reimbursementData=new ReimbursementDisplayModel();
  constructor(public rservice:IndividualreimbursementService,
  private notificationService:NotificationService,
  public dialogRef: MatDialogRef<ReimbursementEditComponent>) { }

  ngOnInit() {
  }

  mapFormData(data){
    var date1= data.reimbursementDate.toString();
    this.reimbursementData.email=data.email;
    this.reimbursementData.currency=data.currency;
    this.reimbursementData.reimbursementType=data.reimbursementtype;
    this.reimbursementData.requestedValue=data.rquestedValue;
    this.reimbursementData.claimDate=data.reimbursementDate;
    this.reimbursementData.dateString=date1;
    this.reimbursementData.id=data.Id;

    if(data.uploadImage===""){
      this.reimbursementData.reciptAttached="None";
      //console.log(data.uploadImage);

    }

    else{
      this.reimbursementData.reciptAttached=data.uploadImage.toString();
      //console.log(this.reimbursementData.reciptAttached);
    }
    console.log(this.reimbursementData);

  }

  onSaveChanges(){
    var data= this.rservice.form.value;
    //console.log(data);
    if (this.rservice.form.valid){ 
      this.mapFormData(data);

      this.rservice.onSubmitEditedReimbursementData(this.reimbursementData)
      .subscribe((data)=>{
        console.log("Updated Successfully");
      },
      (error)=>{
        console.log(error);
      }
      );

    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.notificationService.success('::Claim Updated Successfully..!!');
    this.onClose();
        
    }
    
  }

  onClose() {
    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.dialogRef.close();
  }

  onClear(){
    this.rservice.form.reset();
    this.rservice.initializeFormGroup();
    this.notificationService.success('::Form Cleared Successfully..!!');
  }

}
