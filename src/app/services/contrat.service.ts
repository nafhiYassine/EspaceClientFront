import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';
import { Observable, catchError, tap } from 'rxjs';
import { Contrat } from '../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
contrat:Contrat=null;
  constructor(private httpClient:HttpClient) { }

  public findContrats():Observable<Contrat> {
   // let queryParams = new HttpParams();
    /*queryParams = queryParams.append("idfass",idfass);
    queryParams = queryParams.append("envir",envir);*/
//,{params:queryParams}
    return this.httpClient.get(API_HOST + '/api/data/sante').pipe(tap((response: Contrat) => {
      console.log(API_HOST + '/api/data/sante')
			// Handle the retrieved string data
			this.contrat = response;
   //   console.log("response",JSON.stringify(response))
		  }),
		  catchError((error: any) => {
			console.error('Error de recuperation de contrat', error);
			throw error;
		  })
		);;

  }
}
