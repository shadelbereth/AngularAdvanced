import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn : boolean = false;

  constructor() { }

  login(userName: string, password: string) {
    this.loggedIn = userName === password;
  }
}
