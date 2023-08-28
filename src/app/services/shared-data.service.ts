import { Injectable } from '@angular/core';
import { Data } from '../models/Data';
import { AuthObject } from '../models/AuthObject';
import { TokenStorageService } from '../token-storage-service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  data: Data;

  _authObj: AuthObject ;
  constructor(private tokenStorage: TokenStorageService) {

  }

  public  clearAuthObj():void{
    this._authObj = null;
  }

  get   authObj(): AuthObject {
    if(!this._authObj){
      console.log('New Auth object creation ....')
      this._authObj = new AuthObject;
      let decodedToken: any = jwt_decode(this.tokenStorage.getToken());
      this._authObj.idfass = decodedToken.jti;
      this._authObj.envir = decodedToken.aud;
      this._authObj.compo = decodedToken.compo;
      this._authObj.typeContrat = decodedToken.typcrm;
      this._authObj.username = decodedToken.iss;
      this._authObj.idfpol=decodedToken.idfpol;
    }
    return this._authObj;
  }




}
