import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';


@Injectable()
export class UserService {
    readonly rootUrl = 'http://localhost:63387/';

    constructor(private http: HttpClient) {

    }
    email:string='';

    subject= new Subject<string>();

    registerUser(user: User) {
        const userData: User = {

            FullName: user.FullName,
            Email: user.Email,
            PanNumber: user.PanNumber,
            BankName: user.BankName,
            AccountNumber: user.AccountNumber,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword

        }
        console.log(userData);
        let contentHeaders = new HttpHeaders({
            'No-Auth':'True'
        });
        var userDatajson = JSON.stringify(userData);
        console.log(userDatajson);
        return this.http.post(this.rootUrl + 'api/Account/Register', userData,{headers:contentHeaders});
    }

    userAuthentication(uname:string, password:string) {
        // console.log(uname);
        // console.log(password);
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', uname);
        urlSearchParams.set('password', password);
        urlSearchParams.set('grant_type', 'password');
        var data = urlSearchParams.toString();
        //"username "+uname+"&password "+password+"&grant_type=password";
        console.log(data);
        var requestHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });

        return this.http.post(this.rootUrl + '/token', data, 
        { headers: requestHeader });
    }

    getUserClaims(){

        //var requestHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')});

        return this.http.get(this.rootUrl+'api/Account/UserInfo');
    }

}