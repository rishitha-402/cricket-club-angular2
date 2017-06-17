import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent {
  title = 'Cricket Club PDX';
  email: string;
  password: string;

  constructor(public authService: AuthService){}

  signup(){
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout(){
    this.authService.logout();
    }
  }
