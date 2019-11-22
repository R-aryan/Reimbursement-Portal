import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatSort, MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { ReimbursementDisplayModel } from 'src/app/shared/reimbursementDisplay.model';
import { AdminDeclineComponent } from '../admin-decline/admin-decline.component';
import { AdminApproveComponent } from '../admin-approve/admin-approve.component';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['date' ,  'reimbursementType',  'requestedValue', 'approvedValue','currency','requestPhase','reciptAttached',  'email','actions'];

  status:string='To Be Processed';

  attached:string='None';

  searchKey:string;

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;



  displayModel:ReimbursementDisplayModel[];

  reimbursementData= new ReimbursementDisplayModel();

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  //paginator: any;

  constructor(private adminService:AdminService,private route:Router,
    private notificationService:NotificationService, private dialog:MatDialog) { }

  ngOnInit() {
    this.adminService.onGetPendingrequest()
    .subscribe((data:ReimbursementDisplayModel[])=>{
      this.displayModel=data;
      //console.log(this.displayModel);
      this.listData= new MatTableDataSource(this.displayModel);
      this.listData.paginator = this.paginator;
    });
  }

  mapFormData(data,phase:string,amount:string){
    var date1= data.claimDate.toString();

    this.reimbursementData.email=data.email;
    this.reimbursementData.currency=data.currency;
    this.reimbursementData.reimbursementType=data.reimbursementType;
    this.reimbursementData.requestedValue=data.requestedValue;
    this.reimbursementData.claimDate=data.claimDate;
    this.reimbursementData.dateString=date1;
    this.reimbursementData.id=data.id;
    this.reimbursementData.requestPhase=phase;
    this.reimbursementData.reciptAttached=data.reciptAttached;
    this.reimbursementData.approvedValue=data.approvedValue;

    //console.log("mapped value goes here....\n");
    //console.log(this.reimbursementData);

  }

  onApprove(element){
    console.log(element);
    this.adminService.populateApproveForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminApproveComponent,dialogConfig);


  }

  onDecline(element){
    console.log(element);
    this.mapFormData(element,"Declined","0");
    this.adminService.onPutDeclinedRequest(this.reimbursementData)
    .subscribe((data)=>{
      console.log("Declined Successfully...!!");
      this.notificationService.success("::Request Declined Successfully..!!");
    },
    (error)=>{
      console.log(error);
    })


  }

  applyFilter()
  {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onSearchClear()
  {
    this.searchKey="";
    this.applyFilter();
  } 



}
