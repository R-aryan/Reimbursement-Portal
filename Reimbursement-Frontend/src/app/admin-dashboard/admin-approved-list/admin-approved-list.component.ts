import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ReimbursementDisplayModel } from 'src/app/shared/reimbursementDisplay.model';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-approved-list',
  templateUrl: './admin-approved-list.component.html',
  styleUrls: ['./admin-approved-list.component.css']
})
export class AdminApprovedListComponent implements OnInit {

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['date' ,  'reimbursementType',  'requestedValue', 'approvedValue','currency','requestPhase','reciptAttached',  'email'];

  status:string='To Be Processed';

  attached:string='None';

  searchKey:string;

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  displayModel:ReimbursementDisplayModel[];

  reimbursementData= new ReimbursementDisplayModel();

  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.onGetApprovedRequest().subscribe((data:ReimbursementDisplayModel[])=>{
      this.displayModel=data;
      //console.log(this.displayModel);
      this.listData= new MatTableDataSource(this.displayModel);
      this.listData.paginator = this.paginator;
    });
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
