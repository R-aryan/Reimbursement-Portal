import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ReimbursementModel } from './reimbursement.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReimbursementDisplayModel } from './reimbursementDisplay.model';

@Injectable({
  providedIn: 'root'
})
export class IndividualreimbursementService {

  readonly rootUrl = 'http://localhost:63387/';

  reimbursement_type:string[]=["Medical","Travel","Food","Entertainment","Misc"]
  currency:string[]=["INR","USD","EURO","YEN"];

  email:string=localStorage.getItem('userEmail');

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    //$key: new FormControl(null),
    //fullName: new FormControl('', Validators.required),
    Id:new FormControl(''),
    reimbursementtype: new FormControl('',Validators.required),
    rquestedValue: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(6)]),
    currency: new FormControl('',Validators.required),
    uploadImage:new FormControl(''),
    reimbursementDate: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),

  
  });

  initializeFormGroup() 
  {
    this.form.setValue({
      //$key:null,
      //fullName:'',
      reimbursementtype:'',
      rquestedValue:'',
      currency: '',
      reimbursementDate:'',
      uploadImage:'',
      email:'',
      Id:''

    });
  }

  onSubmitReimbursementData(reim:ReimbursementModel){
    let contentHeaders = new HttpHeaders({
      'No-Auth':'True'
    });
    
    return this.http.post(this.rootUrl + '/api/reimbursement', reim);

  }

  onGetReimbursementData(){
    let mail= localStorage.getItem('userEmail');
    //console.log(mail);
    let param = new HttpParams().set('id',mail);

    return this.http.get(this.rootUrl+'api/reimbursement',{ params: param }); 
  }

  populateForm(row){
    // console.log("row is");
    // console.log(row);
    this.form.setValue({
      email:row.email,
      rquestedValue:row.requestedValue,
      currency:row.currency,
      reimbursementDate:row.claimDate,
      reimbursementtype:row.reimbursementType,
      uploadImage:'',
      Id:row.id
   
    })

  }

  onSubmitEditedReimbursementData(data:ReimbursementDisplayModel){
    //console.log(data);
    let uid= data.id;
    //let param = new HttpParams().set('id',uid);
    return this.http.put(this.rootUrl+'api/reimbursement/'+uid,data); 

  }

  onDeleteDataById(id:number){
    return this.http.delete(this.rootUrl+'api/reimbursement/'+id); 
  }
}
