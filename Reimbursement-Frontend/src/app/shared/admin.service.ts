import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReimbursementDisplayModel } from './reimbursementDisplay.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly rootUrl = 'http://localhost:63387/';

  constructor(private http:HttpClient) { }

  onGetPendingrequest(){

    return this.http.get(this.rootUrl+'api/admin'); 
  }

  onPutDeclinedRequest(reimbursementData:ReimbursementDisplayModel){

    
    return this.http.put(this.rootUrl+'api/admin/'+reimbursementData.id,reimbursementData); 
  }

  onGetDeclinedRequest(){
    let status= "Declined";
    let param = new HttpParams().set('id',status);

    return this.http.get(this.rootUrl+'api/admin',{ params: param }); 
  }

  onGetApprovedRequest(){
    let status= "Approved";
    let param = new HttpParams().set('id',status);

    return this.http.get(this.rootUrl+'api/admin',{ params: param }); 

  }

 
    ApproveForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    approvedBy:new FormControl('',Validators.required),
    approvedAmount:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(6)]),
    internalNotes:new FormControl('')
    }); 

 
  populateApproveForm(row)
   {
    this.ApproveForm.setValue({
         // $key:null,

    id:row.id,
    approvedBy:localStorage.getItem('userEmail'),
    approvedAmount:'',
    internalNotes:''
          
        }); 
   }
 
 }

 
