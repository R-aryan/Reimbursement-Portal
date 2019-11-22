
// import {HttpInterceptor,HttpRequest,HttpUserEvent,HttpEvent,HttpHandler} from '@angular/common/http';
// import {Injectable} from '@angular/core';
// //import 'rxjs/add/operator/do';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { tap, map } from 'rxjs/operators';


// @Injectable()

// export class AuthInterceptor implements HttpInterceptor{

//     constructor(private router:Router){

//     }

//     intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
//         if(req.headers.get('No-Auth')=="True"){
//             return next.handle(req.clone());
//         }

//         if(localStorage.getItem('UserToken')!=null){
//             const clonedreq=req.clone({
//                 headers: req.headers.set("Authorization","Bearer "+localStorage.getItem('userToken'))
//             });

//             return next.handle(clonedreq).pipe(tap(
//                 success=>{},
//                 err=>{
//                     if(err.status==401){
//                         this.router.navigateByUrl('/home');
//                     }

//                     else{
//                         this.router.navigateByUrl('/home');
//                     }

//                 }
//             ));

                       
//         }


//     }
// }


import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";
import { UserService } from "../shared/user.service";
//mport 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .pipe(tap(
                succ => { },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/home');
                }
                ));
        }
        else {
            this.router.navigateByUrl('/home');
        }
    }
}