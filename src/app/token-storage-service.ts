import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'JWTToken';
const AUTH_USER = 'AuthUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  userRole: any;

  constructor() { }
//slidbar
  public saveToken(token: string, authenticatedUser: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(AUTH_USER);

    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(AUTH_USER, authenticatedUser);
  }

  public getRole(){
       return jwt_decode(sessionStorage.getItem(TOKEN_KEY))['roles'][0];

   }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTH_USER);
  }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(AUTH_USER);

    window.sessionStorage.clear();
  }
}


