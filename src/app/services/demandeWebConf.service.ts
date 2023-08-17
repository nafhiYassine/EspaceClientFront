import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';
import { Observable, catchError, map, tap } from 'rxjs';
import { AuthObject } from '../models/AuthObject';
import { DemandeWebConf } from '../models/DemandeWebConf';
import { DemandeRequest } from '../models/DemandeRequest';


@Injectable({
  providedIn: 'root'
})
export class DemandeWebConfService {
  demandeWebConfs: DemandeWebConf[];
  constructor(private httpClient: HttpClient) { }
  private tenantId; // Replace this with your actual tenant ID
  public findDemandeWebConf(envir: string): Observable<DemandeWebConf[]> {
    this.tenantId = envir;
    const headers = this.getHeaders();
    return this.httpClient.get(API_HOST + '/api/demandeswebconf',{ headers }).pipe(
      tap((response: DemandeWebConf[]) => {
          this.demandeWebConfs = response;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }
  
  public addDemande(envir: string,idfass: string, username:string, demande: DemandeRequest){
    this.tenantId = envir;
    const queryParams = { idfass: idfass , username:username};
    const headers = this.getHeaders();
    return this.httpClient.post(API_HOST + '/document/depot',demande,{ headers, params: queryParams }).pipe(
      tap((response) => {
        console.log("Depot Successfull");
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
