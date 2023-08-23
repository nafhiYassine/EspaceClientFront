import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_HOST, SECRET_KEY } from '../commons/url.constants';
import { Observable, catchError, map, tap } from 'rxjs';
import { AuthObject } from '../models/AuthObject';
import { Data } from '../models/Data';
import jwt_decode from 'jwt-decode';
import * as CryptoJS from 'crypto-js';
import { TokenStorageService } from './token-storage-service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data;
  authObj: AuthObject = new AuthObject;
  decodedToken: any = jwt_decode(this.tokenStorage.getToken());
  constructor(
    private httpClient: HttpClient,
    private tokenStorage : TokenStorageService) { }
  private tenantId; // Replace this with your actual tenant ID

  public findData(authObj: AuthObject): Observable<Data> {
    this.tenantId = authObj.envir
    const headers = this.getHeaders();
    return this.httpClient.post(API_HOST + '/api/data', authObj, { headers }).pipe(tap((response: Data) => {
      console.log(API_HOST + '/api/data')
      this.data = response;
    }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-TENANTID': this.tenantId
    });
  }


}
