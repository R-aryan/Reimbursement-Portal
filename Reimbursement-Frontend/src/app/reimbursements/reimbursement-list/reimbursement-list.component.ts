import { Component, OnInit, ViewChild } from '@angular/core';
import { IndividualreimbursementComponent } from '../individualreimbursement/individualreimbursement.component';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { UserService } from 'src/app/shared/user.service';
import { IndividualreimbursementService } from 'src/app/shared/individualreimbursement.service';
import { ReimbursementDisplayModel } from 'src/app/shared/reimbursementDisplay.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NotificationService } from '../../shared/notification.service';
import { ReimbursementEditComponent } from '../reimbursement-edit/reimbursement-edit.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['date' ,  'reimbursementType',  'requestedValue', 'approvedValue','currency','requestPhase','reciptAttached',  'email','actions'];
  status:string='To Be Processed';
  attached:string='None';
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

constructor(private userService:UserService,
  private indiService:IndividualreimbursementService,
  private dialog:MatDialog,private route:Router,private notificationService:NotificationService) { 

  }
  displayModel:ReimbursementDisplayModel[];

  ngOnInit() {
    this.indiService.onGetReimbursementData()
    .subscribe((data:ReimbursementDisplayModel[])=>{
      //console.log(data);
      this.displayModel=data;
      //console.log(this.displayModel);
      this.listData= new MatTableDataSource(this.displayModel);
      this.listData.paginator = this.paginator; 
    }
    );
  }

  
  onCreate(){
    this.indiService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(IndividualreimbursementComponent,dialogConfig);


  }
   @ViewChild(MatSort,{static:true}) sort: MatSort;
  //searchKey: string;
  
  onEdit(element){
    this.indiService.populateForm(element);
    //console.log(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ReimbursementEditComponent,dialogConfig);
    //localStorage.setItem('editMode','on');

  }

  onBackToDashboard(){
    this.route.navigate(['dashboard']);

  }

  onDelete(id:number){
    //console.log(id);
    this.indiService.onDeleteDataById(id)
    .subscribe((data)=>{
      console.log("Data Deleted Successfully");
    },
    (error)=>{
      console.log(error);
    }
    );

    this.notificationService.success('::Claim Deleted Successfully..!!');

  }


}
