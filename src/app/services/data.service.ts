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
  private tenantId = 'COVERTY'; // Replace this with your actual tenant ID

  public findData(authObj:AuthObject):Observable<Data> {

     let httpH = new HttpHeaders();
     console.log("Environnement : ",authObj.envir);
     httpH.append("X-TENANTID",authObj.envir);

    /*queryParams = queryParams.append("idfass",idfass);
    queryParams = queryParams.append("envir",envir);*/
//,{params:queryParams}

     const headers = this.getHeaders();

    return this.httpClient.post(API_HOST + '/api/data',authObj,{ headers }).pipe(tap((response: Data) => {
      console.log(API_HOST + '/api/data')
			// Handle the retrieved string data
			this.data = response;
       console.log(" ** response ",JSON.stringify(response))
		  }),
		  catchError((error: any) => {
			console.error('Error de recuperation de data', error);
			throw error;
		  })
		);;

  }

  private getHeaders(): HttpHeaders {
    // Set the custom header using HttpHeaders
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-TENANTID': this.tenantId
    });

  // getSomeData() {
  //   const url = `${this.baseUrl}/some-endpoint`;
  //   const headers = this.getHeaders();

  //   return this.http.get(url, { headers });
  // }
  // postData(data: any) {
  //   const url = `${this.baseUrl}/some-endpoint`;
  //   const headers = this.getHeaders();

  //   return this.http.post(url, data, { headers });
  // }
}
}
