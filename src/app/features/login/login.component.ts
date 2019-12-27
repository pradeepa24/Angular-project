import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { LoggingService } from  '../login/logging/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(public loggingService: LoggingService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() {
     return this.loginForm.controls;
     }

     login(){
      this.isSubmitted = true;
      if(this.loginForm.invalid){
        return;
      }
      this.loggingService.login(this.loginForm.value);
      if(this.loggingService.isLoggedIn() === true) {
        this.router.navigate(['wizard']);
      }
    }
}
