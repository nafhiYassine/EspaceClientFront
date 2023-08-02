import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

     let httpH = new HttpHeaders();
     console.log("before we append : " + authObj.envir)
     httpH.append("X-TENANTID",authObj.envir);

		const headers = new HttpHeaders().set('X-TenantID', authObj.envir);
    /*queryParams = queryParams.append("idfass",idfass);
    queryParams = queryParams.append("envir",envir);*/
//,{params:queryParams}

    return this.httpClient.post(API_HOST + '/api/data',authObj,{ headers, observe: 'response' }).pipe(tap((response: Data) => {
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
