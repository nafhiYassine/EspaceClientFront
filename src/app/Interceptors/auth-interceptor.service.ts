import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { TokenStorageService } from '../token-storage-service';



const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginService: AuthService, private tokenStorageService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;

    if (this.tokenStorageService.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, this.tokenStorageService.getToken()) });
    }

    return next.handle(authReq);
    //console.log("[ " + "AuthInterceptorService method was executed." + " ]")
    //return next.handle(req);

  }
}
