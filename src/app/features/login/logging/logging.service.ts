import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
authenticatedUser: User;
  constructor() {
    this.authenticatedUser = {username:'admin',password:'admin001'}
   }

  public login(userInfo: User){
    if((this.authenticatedUser.username === userInfo.username) && (this.authenticatedUser.password === userInfo.password) ) {
      localStorage.setItem('ACCESS_TOKEN', "access_token");
    }
    }
   

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}