import { Injectable } from '@angular/core';
import { API_HOST } from '../commons/url.constants';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TokenStorageService } from '../token-storage-service';
import { DocumentResponse } from '../models/DocumentsResponse';



@Injectable({
  providedIn: 'root'
})

export class DocumentsService {
  private apiUrl = 'http://localhost:8080/doc';
  base64Document: string;
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
  // getData() {
  //   const apiUrl = 'your_api_url_here';
  
  //   // Create an instance of HttpParams and add the parameters
  //   const params = new HttpParams()
  //     .set('param1', param1)
  //     .set('param2', param2);
  
  //   // Make the GET request with the parameters
  //   return this.http.get<string[]>(`${apiUrl}/documentTest`, { params });
  // }
  // getDocumentsGenerique(): Observable<string[]> {
  //   const headers = this.getHeaders();
  //   return this.http.get<string[]>(this.apiUrl+'/Documentgeneriques', { headers });
  // }
  getDocumentsGenerique(): Observable<DocumentResponse> {
    const headers = this.getHeaders();
    return this.http.get<DocumentResponse>(`${this.apiUrl}/Documentgeneriques`, { headers });
  }
}
