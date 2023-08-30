import { Injectable } from '@angular/core';
import { AuthObject } from '../models/AuthObject';
import { Observable, catchError, tap } from 'rxjs';
import { API_HOST } from '../commons/url.constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  annees: any[];
  prestations: [];
  constructor(private httpClient: HttpClient) { }

  public findAnnees(authObj: AuthObject): Observable<any> {

    console.log("JSON.stringify(this.annees)")

    return this.httpClient.post(API_HOST + '/api/annees', authObj).pipe(tap((response: any) => {
      this.annees = response;
      console.log(JSON.stringify(this.annees))
    }),

      catchError((error: any) => {
        throw error;
      })
    );
  }


  findPrestationByAnne(authObj: AuthObject, annee: string) {
    const queryParams = { annee: annee };

    return this.httpClient.post(API_HOST + '/api/prestations', authObj,{params:queryParams}).pipe(tap((response: any) => {
      this.prestations = response;
    }),

      catchError((error: any) => {
        throw error;
      })
    );
  }

}
