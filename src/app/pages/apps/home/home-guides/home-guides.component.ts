import { Component, OnInit } from '@angular/core';
import { trackById } from '../../../../../@vex/utils/track-by';
import { MatDialog } from '@angular/material/dialog';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { LayoutService } from '../../../../../@vex/services/layout.service';
import {  DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthObject } from 'src/app/models/AuthObject';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from 'src/app/token-storage-service';
import { Souscripteur } from 'src/app/models/Souscripteur';
import { Data } from '../../../../models/Data';


export enum GuideCategory {
  firstSteps,
  accountSettings,
  apiHelp,
  billing,
}

export interface Guide {
  id: number;
  label: string;
  icon: string;
  category: GuideCategory;
  amount: number;
  onClick: (guide: Guide) => void;
}

@Component({
  selector: 'vex-home-guides',
  templateUrl: './home-guides.component.html',
  styleUrls: ['./home-guides.component.scss']
})
export class HomeGuidesComponent implements OnInit {
  decodedToken: any = jwt_decode(this.tokenStorage.getToken());
  data :Data;
  authObj:AuthObject={

  };

  guides: Guide[] = [

    {
      id: 1,
      label: 'Du 01/02/2022 au 01/02/2023',
      icon: 'mat:description',
      category: GuideCategory.billing,
      amount: 147,
      onClick: guide => this.openDialog(guide)
    },
    {
      id: 2,
      label: 'Du 01/02/2022 au 01/02/2023',
      icon: 'mat:description',
      category: GuideCategory.billing,
      amount: 102,
      onClick: guide => this.openDialog(guide)
    },
  ];

  accountSettings = this.guides.filter(guide => guide.category === GuideCategory.accountSettings);
  apiHelp = this.guides.filter(guide => guide.category === GuideCategory.apiHelp);
  billing = this.guides.filter(guide => guide.category === GuideCategory.billing);
  firstSteps = this.guides.filter(guide => guide.category === GuideCategory.firstSteps);
  trackById = trackById;
  isDesktop$  = this.layoutService.isDesktop$;

  constructor(
    private dialog: MatDialog,private dataService:DataService,private tokenStorage:TokenStorageService, 
    private layoutService: LayoutService,private route: ActivatedRoute) { }


  ngOnInit() {
    this.initializeData();
  }

  private initializeData() {
    this.authObj.idfass = this.decodedToken.jti;
    this.authObj.envir = this.decodedToken.aud;
    this.authObj.compo = this.decodedToken.compo;
    this.authObj.typeContrat = this.decodedToken.typcrm;
    this.authObj.username = this.decodedToken.iss;
    this.dataService.findData(this.authObj).subscribe(
      (data : Data) => {
        console.log("ARRAY:", data.listeContrats);

        this.data = data;
      }
    );
  }

  openDialog(guide: Guide) {
    this.dialog.open(HomeGuidesGuideComponent, {
      data: guide,
      width: '95%'
    });
  }
}
