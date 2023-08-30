import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestation } from '../models/Prestation';
import { Observable, catchError, tap } from 'rxjs';
import { API_HOST } from '../commons/url.constants';

@Injectable({
  providedIn: 'root'
})
export class DocumentPrestationService {
document:any;
  constructor(private httpClient:HttpClient ) { }
  public getDocument(idfpol:string,numdos:any,idfass:string,envir:string): Observable<any> {
    const queryParams = { idfpol: idfpol,numdos:numdos,idfass:idfass,envir:envir };

console.log(JSON.stringify(queryParams))
    const headers=new HttpHeaders({
      'Content-Type': 'application/pdf',
    });
    return this.httpClient.get(API_HOST + '/api/getDocumentDecompte',{headers,params:queryParams,responseType:'blob'}).pipe(tap((response:Blob) => {
      this.document = response;
      console.log("response +++++++++++++++++++++++++++++++"+response);
    }),
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
