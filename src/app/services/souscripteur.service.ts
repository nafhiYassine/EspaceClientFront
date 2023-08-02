import { Injectable } from '@angular/core';
import { Souscripteur } from '../models/Souscripteur';
import { Observable, catchError, map, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_HOST } from '../commons/url.constants';

@Injectable({
  providedIn: 'root'
})
export class SouscripteurService {


  constructor(private httpClient:HttpClient) { }
  public findSouscripteur(username:string,envir:string):Observable<Souscripteur> {
      let queryParams = new HttpParams();
    queryParams = queryParams.append("username",username);
    queryParams = queryParams.append("envir",envir);
    return this.httpClient.get(API_HOST + '/api/souscripteur/souscripteur',{params:queryParams}).pipe(
      map((response : Souscripteur)=> response ),
      catchError((error: any) => {
        console.error('Erreur recuperation souscripteur ', error);
        throw error;
        }

    ))
  }
}
