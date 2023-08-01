import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';
import { Observable, catchError, tap } from 'rxjs';
import { Data } from '@angular/router';
import { AuthObject } from '../models/AuthObject';


@Injectable({
  providedIn: 'root'
})
export class DataService {
data:Data=null;
  constructor(private httpClient:HttpClient) { }

  public findContrats(authObj:AuthObject):Observable<Data> {
   // let queryParams = new HttpParams();
    /*queryParams = queryParams.append("idfass",idfass);
    queryParams = queryParams.append("envir",envir);*/
//,{params:queryParams}



    return this.httpClient.post(API_HOST + '/api/data',authObj).pipe(tap((response: Data) => {
      console.log(API_HOST + '/api/data')
			// Handle the retrieved string data
			this.data = response;
   //   console.log("response",JSON.stringify(response))
		  }),
		  catchError((error: any) => {
			console.error('Error de recuperation de contrat', error);
			throw error;
		  })
		);;

  }
}
