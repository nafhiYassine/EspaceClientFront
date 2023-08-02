import { Injectable } from '@angular/core';
import { API_HOST } from '../commons/url.constants';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  getDocuments(): Observable<string[]> {
    const headers = this.getHeaders();
    return this.http.get<string[]>(this.apiUrl+'/documentTest', { headers });
  }
  private getHeaders() {
    const token = this.tokenStorageService.getToken() // Retrieve the token from storage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`, // Add the token to the Authorization header
    });
    return headers;
  }
  // getDocumentsGenerique(): Observable<string[]> {
  //   const headers = this.getHeaders();
  //   return this.http.get<string[]>(this.apiUrl+'/Documentgeneriques', { headers });
  // }
  getDocumentsGenerique(): Observable<DocumentResponse> {
    const headers = this.getHeaders();
    return this.http.get<DocumentResponse>(`${this.apiUrl}/Documentgeneriques`, { headers });
  }
}
