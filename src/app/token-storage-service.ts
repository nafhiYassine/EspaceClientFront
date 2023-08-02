import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'JWTToken';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const AUTH_USER = 'AuthUser';
const USER_ID = 'USER_ID';
const TYPECRM = 'TYPECRM';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  userRole: any;

  constructor() { }
//slidbar
  public saveToken(token: string, refreshToken: string, issuer: string, id: string, typcrm: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    window.sessionStorage.removeItem(AUTH_USER);
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.removeItem(TYPECRM);

    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
    window.sessionStorage.setItem(AUTH_USER, issuer);
    window.sessionStorage.setItem(USER_ID, id);
    window.sessionStorage.setItem(TYPECRM, typcrm);
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

  public storeSessionData(token: string, refreshToken: string): void {
    try {
      const decodedToken: any = jwt_decode(token);
      const issuer : string = decodedToken.iss;
      const id : string = decodedToken.jti;
      const typcrm : string = decodedToken.typcrm;
      this.saveToken(token,refreshToken,issuer,id,typcrm);
      console.log('Decoded Token: ', decodedToken);
      console.log('Issuer: ', decodedToken.iss);
      console.log('Issuer 2: ', issuer);
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  }
  public getTycrm(){
    return  jwt_decode(sessionStorage.getItem(TYPECRM));
  }
  public getIdfass(){
    return  jwt_decode(sessionStorage.getItem(TYPECRM));
  }
  public getUserName():string{
    return  jwt_decode(sessionStorage.getItem(AUTH_USER));

  }
}


