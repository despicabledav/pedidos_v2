import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authenticationState = new BehaviorSubject(false);
  
  constructor(
    private storage: Storage,
    private plt: Platform,
    private http: HttpClient
  ) {
    this.plt.ready().then( () => {
      this.checkToken();
    });
  }

  login(vendedor) {

  }

  logout() {}

  isAuthenticated() {}

  checkToken() {}
 
}
