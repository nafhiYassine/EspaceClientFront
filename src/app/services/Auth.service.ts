import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { of } from 'rxjs';
import { TokenStorageService } from '../../app/token-storage-service';
import { API_HOST } from '../commons/url.constants';
import { Result } from 'postcss';

@Injectable({
	providedIn: 'root',
})

export class AuthService {

	user: Observable<any>;
	userData: any;
	isLoggedIn = false;
	roleAs: string;
	envir: string;


	constructor(
		private tokenStorageService: TokenStorageService,
		private router: Router,
		private http: HttpClient
	) {}

	public getBibBySouscripteur(souscripteur: any): Observable<string> {
		const apiEndpoint = API_HOST + '/api/auth/bib';
	  
		return this.http.post(apiEndpoint, souscripteur, { responseType: 'text' }).pipe(
		  tap((response: string) => {
			// Handle the retrieved string data
			this.envir = response;
		  }),
		  catchError((error: any) => {
			console.error('Error retrieving data from the backend:', error);
			throw error; // Rethrow the error to propagate it to the caller.
		  })
		);
	}

	public async authenticate(souscripteur: User) {
		await this.getBibBySouscripteur(souscripteur).toPromise();
		const headers = new HttpHeaders().set('X-TenantID', this.envir);
		return this.http.post(API_HOST + '/api/auth/login', souscripteur, { headers, observe: 'response' })
		  .pipe(
			map((data) => {
			  const authorization = data.headers.get('authorization');
			  const refreshToken = data.headers.get('refreshToken');
			  return { authorization, refreshToken };
			}),
			catchError(this.handleError<User>('authenticate'))
		  );
	  }

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			console.error(error);

			console.warn(`${operation} failed: ${error.message}`)

			return of(result as T);
		};
	}

	isAuthenticated() {
		const loggin = sessionStorage.getItem("JWTToken");
		if (loggin) {
			this.isLoggedIn = true;

		} else {
			this.isLoggedIn = false;

		}
		return this.isLoggedIn;
	}

	logOut() {
		this.tokenStorageService.signOut();
		localStorage.removeItem("userProfileData");
		this.isLoggedIn = false;
		this.router.navigate(['/session/login']);
	}

	setLocalUserProfile(value) {
		localStorage.setItem("userProfileData", JSON.stringify(value));
		this.isLoggedIn = true;
	}
	getRole() {
		this.roleAs = this.tokenStorageService.getRole();
		return this.roleAs;
	}
}

