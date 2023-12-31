import { Component, OnInit } from '@angular/core';
import { FriendSuggestion } from '../social.component';
import { friendSuggestions } from '../../../../../static-data/friend-suggestions';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { DataService } from 'src/app/services/data.service';
import { TokenStorageService } from 'src/app/services/token-storage-service';
import jwt_decode from 'jwt-decode';
import { Data } from '@angular/router';
import { AuthObject } from 'src/app/models/AuthObject';
import { SECRET_KEY } from 'src/app/commons/url.constants';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'vex-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class SocialProfileComponent implements OnInit {

  decodedToken: any = jwt_decode(this.tokenStorage.getToken());

  data: Data = {

  };

  authObj: AuthObject = {

  };


  suggestions = friendSuggestions;

  constructor(private dataService: DataService, private tokenStorage: TokenStorageService) { }

  // ngOnInit(): void {

  //   this.authObj.idfass = this.decodedToken.jti;
  //   this.authObj.envir = this.decodedToken.aud;
  //   this.authObj.compo = this.decodedToken.compo;
  //   this.authObj.typeContrat = this.decodedToken.typcrm;
  //   this.authObj.username = this.decodedToken.iss;

  //   this.dataService.findData(this.authObj).subscribe ((data) => {
  //     this.data = data;
  //   })

    ngOnInit() {
      this.retrieveData();
    }
    private retrieveData() {
      this.authObj.idfass = this.decodedToken.jti;
      this.authObj.envir = this.decodedToken.aud;
      this.authObj.compo = this.decodedToken.compo;
      this.authObj.typeContrat = this.decodedToken.typcrm;
      this.authObj.username = this.decodedToken.iss;
      if (localStorage.getItem('data')) {
        const serializedData: string = localStorage.getItem('data');
        const decryptedBytes = CryptoJS.AES.decrypt(serializedData, SECRET_KEY);
        const decryptedDataString = decryptedBytes.toString(CryptoJS.enc.Utf8);
        this.data = JSON.parse(decryptedDataString);
      }
      else {
        this.initializeData();
      }
    }

    private initializeData() {

      this.dataService.findData(this.authObj).subscribe(
        (data: Data) => {
          this.data = data;
          const encryptedData : string = CryptoJS.AES.encrypt(JSON.stringify(this.data), SECRET_KEY).toString()
          localStorage.setItem('data',encryptedData)
        }
      );

    }

    addFriend(friend: FriendSuggestion) {
      friend.added = true;
    }

    removeFriend(friend: FriendSuggestion) {
      friend.added = false;
    }

    trackByName(index: number, friend: FriendSuggestion) {
      return friend.name;
    }
  }
