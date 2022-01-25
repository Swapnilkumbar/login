import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import userData from 'Login-creds.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  proceedLogin(usercred:any){
     if(usercred.username.includes('@')){
      if(usercred.username == userData[0].email && usercred.password == userData[0].password){
        localStorage.setItem('user', JSON.stringify(userData[0].email));
        this.router.navigate(['dashboard']);
      }
      else{
        console.log("Login Failed");
      }
    } else{
      if(usercred.username == userData[1].mobile && usercred.password == userData[1].password){
        localStorage.setItem('user', JSON.stringify(userData[1].mobile));
        this.router.navigate(['dashboard']);
      }
      else{
        console.log("Login Failed");
      }
    }
  }
  isLoggedIn(){
    return localStorage.getItem('user')!=null;
  }
}
