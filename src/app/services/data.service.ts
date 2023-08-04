import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';
import { Observable, catchError, tap } from 'rxjs';
import { AuthObject } from '../models/AuthObject';
import { Data } from '../models/Data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data;
  constructor(private httpClient: HttpClient) { }
  private tenantId; // Replace this with your actual tenant ID

  public findData(authObj: AuthObject): Observable<Data> {
    this.tenantId = authObj.envir
    const headers = this.getHeaders();
    return this.httpClient.post(API_HOST + '/api/data', authObj, { headers }).pipe(tap((response: Data) => {
      console.log(API_HOST + '/api/data')
      this.data = response;
      console.log(this.data)
      localStorage.setItem('data',btoa(JSON.stringify(this.data)))
      console.log(btoa(JSON.stringify(this.data)))
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
