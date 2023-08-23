import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable
import { map, catchError } from 'rxjs/operators'; // Import necessary operators
import { API_HOST } from '../commons/url.constants';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassword {
  constructor(private http: HttpClient) { }

  result: any;
  IsOk: boolean = false;

  public sendEmail(email): Observable<any> { // Return Observable
    return this.http.post(API_HOST + '/api/sendMail?to=' + email, {});
  }

  // You can add other methods here

  // Example using the toPromise operator
  public sendEmailWithPromise(email): Promise<any> {
    return this.sendEmail(email)
      .pipe(
        map(response => response), // Map the response
        catchError(error => Promise.reject(error)) // Handle errors
      )
      .toPromise(); // Convert the Observable to Promise
  }
}
