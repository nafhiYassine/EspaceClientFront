import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';
import { Observable, catchError, map, tap } from 'rxjs';
import { AuthObject } from '../models/AuthObject';
import { Demande } from '../models/Demande';
import { DemandeRequest } from '../models/DemandeRequest';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  demandes: Demande[] | Demande;
  constructor(private httpClient: HttpClient) { }
  private tenantId; // Replace this with your actual tenant ID
  private idfass : string; // Replace this with your actual tenant ID

  public findDemandes(envir: string,idfass: string): Observable<Demande | Demande[]> {
    this.tenantId = envir;
    this.idfass = idfass;
    const queryParams = { idfass: this.idfass };
    const headers = this.getHeaders();
    return this.httpClient.get(API_HOST + '/api/demandes',{ headers, params: queryParams }).pipe(
      tap((response: Demande | Demande[]) => {
        if (Array.isArray(response)) {
          this.demandes = response;
        } else {
          this.demandes = [response];
        }
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
