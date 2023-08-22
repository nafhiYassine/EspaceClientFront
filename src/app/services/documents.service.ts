import { Injectable } from '@angular/core';
import { API_HOST } from '../commons/url.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { TokenStorageService } from '../token-storage-service';
import { DocumentResponse } from '../models/DocumentsResponse';
import { catchError, throwError, Observable, map, tap } from 'rxjs';
import { WebConf } from '../models/WebConf';




@Injectable({
  providedIn: 'root'
})

export class DocumentsService {
  private apiUrl = API_HOST+'/doc';
  base64Document: string;
  webConf : WebConf
  constructor(private http: HttpClient ,private tokenStorageService: TokenStorageService) { }

  getDocuments(param1: string, param2: string): Observable<DocumentResponse> {
    // const headers = this.getHeaders();
    const params = new HttpParams()
      .set('param1', param1)
      .set('param2', param2);
      return this.http.get<DocumentResponse>(`${this.apiUrl}/documentTest2`, { params });
  }
  private getHeaders() {
    const token = this.tokenStorageService.getToken() // Retrieve the token from storage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`, // Add the token to the Authorization header
    });
    return headers;
  }

  EcheancierDoc(idfpol: string, IDfass: string, envir: any): Observable<string> {
    const params = new HttpParams()
      .set('idfpol', idfpol)
      .set('IDfass', IDfass)
      .set('envir', envir);
  
    return this.http.get<string>(`${this.apiUrl}/echeancier`, { params })
      .pipe(
        catchError((error) => {
          console.error('Error fetching documents:', error);
          throw error; // Rethrow the error to the subscriber
        })
      );
  }

  public getEcheancierDoc(idfpol: string, idfass: string, envir: string): Observable<string[]> {
    const params = new HttpParams()
      .set('idfpol', idfpol)
      .set('IDfass', idfass)
      .set('envir', envir);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<string[]>(`${this.apiUrl}/echeancier`, { params, headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching documents:', error);
    return throwError('Something went wrong; please try again later.');
  }

  getDocumentsGenerique(): Observable<DocumentResponse> {
    const headers = this.getHeaders();
    return this.http.get<DocumentResponse>(`${this.apiUrl}/Documentgeneriques`,{ headers });

  }

  getWebConf(idfass: string, envir: string): Observable<WebConf> {
    const params = new HttpParams()
    .set('idfass', idfass)
    .set('envir', envir)
    const headers = this.getHeaders();
    return this.http.get<WebConf>(`${this.apiUrl}/webConf`,{params, headers}).pipe(tap((response: WebConf) => {
      this.webConf = response;
    }),
      catchError((error: any) => {
        throw error;
      })
    );;

  }



/*   getDocumentsHGenerique(param1: string, param2: string): Observable<DocumentResponse> {
    const params = new HttpParams()
      .set('param1', param1)
      .set('param2', param2);
    const headers = this.getHeaders();
    return this.http.get<DocumentResponse>(`${this.apiUrl}/HDocumentgeneriques`,{ params });

  }
 */


}
