import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error;
  model : any = {};
  constructor(private router: Router,
  private appService: AppService,
  public snackBar: MatSnackBar) {
    appService.getState().topnavTitle = 'Sign In';
    appService.getState().pageFullscreen = true;
    appService.getState().pageFooter = false;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

  login(){

  }
}
