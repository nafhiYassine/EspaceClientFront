import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable
import { map, catchError, tap } from 'rxjs/operators'; // Import necessary operators
import { API_HOST } from '../commons/url.constants';
import { PasswordModel } from '../models/PasswordModel';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassword {
  constructor(private http: HttpClient) { }

  result: any;
  IsOk: boolean = false;
  envir: string;
  // public getEnvir(email) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  
  //   const options = { headers: headers }; 
  
  //   return this.http.post(API_HOST + '/email/getBIB?to=' + email, null, options);
  // }
  public getEnvir(email: string ): Observable<string> {
		const apiEndpoint = API_HOST + '/email/getBIB?to=';
	  
		return this.http.post(API_HOST + '/email/getBIB?to=' + email, { responseType: 'text' }).pipe(
		  tap((response: string) => {
			this.envir = response;
		  }),
		  catchError((error: any) => {
			console.error('Error retrieving data from the backend:', error);
			throw error;
		  })
		);
	}
  public async sendEmail(email): Promise<Observable<any>> { 
    await this.getEnvir(email).toPromise();
    const headers = new HttpHeaders().set('X-TenantID', this.envir);
    return this.http.post(API_HOST + '/email/sendMail?to=' + email, {headers, observe: 'response' });
  }


  // public sendEmailWithPromise(email): Promise<any> {
  //   return this.sendEmail(email)
  //     .pipe(
  //       map(response => response), // Map the response
  //       catchError(error => Promise.reject(error)) // Handle errors
  //     )
  //     .toPromise(); // Convert the Observable to Promise
  // }


  public changePassword(token: string, passwordModel: PasswordModel): Observable<any> {
    const url = API_HOST + '/email/changePassword';
    const params = { ResetToken: token }; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the correct content type
    });
    // return this.http.post(url, passwordModel, { headers, params });
    return this.http.post(url, JSON.stringify(passwordModel), { headers, params });

  }

}
