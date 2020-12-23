import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  [x: string]: any;
  currentUser: any; 

  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelperService ();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {     //LogIn
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
    .pipe(map(response => {
      let result = response.json();
      
      if (result && result.token) {
        localStorage.setItem('token', result.token);

        let jwt = new JwtHelperService ();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true;
      }
      else return false;
    }));
  }

  logout() {    //Logout
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() {     //Check login or not
    return this.jwt.isTokenExpired('token');
  }
}

