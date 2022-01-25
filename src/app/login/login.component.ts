import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router, private service: AuthService) { }

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(){
    this.service.proceedLogin(this.loginForm.value);
  }
}