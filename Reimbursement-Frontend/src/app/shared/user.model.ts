export class User{
    FullName:string;
    Email:string;
    PanNumber:string;
    BankName:string;
    AccountNumber:string;
    Password:string;
    ConfirmPassword:string;

    constructor(fname:string,email:string,
        pan:string,ban:string,
        acc:string,pas:string,cnf:string){
        this.FullName=fname;
        this.Email=email;
        this.PanNumber=pan;
        this.BankName=ban;
        this.AccountNumber=acc;
        this.Password=pas;
        this.ConfirmPassword=cnf;
    }
}