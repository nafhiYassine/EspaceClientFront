import { Injectable } from '@angular/core';
import { Souscripteur } from '../models/souscripteur';
import { Observable, catchError, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';

@Injectable({
  providedIn: 'root'
})
export class SouscripteurService {


  constructor(private httpClient:HttpClient) { }
  public findSouscripteur():Observable<Souscripteur> {
    return this.httpClient.get(API_HOST + '/api/souscripteur').pipe(
      map((response : Souscripteur)=> response )
    )
  }
}
