import { Component, OnInit } from '@angular/core';
import { trackById } from '../../../../../@vex/utils/track-by';
import { MatDialog } from '@angular/material/dialog';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { LayoutService } from '../../../../../@vex/services/layout.service';
import { Contrat } from 'src/app/models/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Souscripteur } from 'src/app/models/souscripteur';
import { SouscripteurService } from 'src/app/services/souscripteur.service';
import { TokenStorageService } from 'src/app/token-storage-service';
import jwt_decode from 'jwt-decode';


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
  username:string;
  envir:string;
  contrat :Contrat={

  };
  souscripteur:Souscripteur={
    nom: '',
    prenom: '',
    idfnss:''
  };
  authObj:AuthObj={

  }
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
    private dialog: MatDialog,private contratService:ContratService,private souscripteurService:SouscripteurService,private tokenStorage:TokenStorageService
   , private layoutService: LayoutService) { }
  ngOnInit() {
    const decodedToken: any = jwt_decode(this.tokenStorage.getToken());
 console.log(decodedToken.iss);
 this.username=decodedToken.iss;
 this.envir=decodedToken.aud;
  console.log(this.username +"   "+this.envir)

    console.log("helleoooo")

    this.souscripteurService.findSouscripteur(this.username,this.envir).subscribe (
      (data)=>{
        console.log("data",data)
        console.log("getToken()",this.tokenStorage.getToken())
        this.souscripteur=data;
        console.log('this.souscripteur:',JSON.stringify(this.souscripteur));
      }
    )
    this.authObj.idfass=decodedToken.jti
    this.authObj.envir=decodedToken.aud
    this.authObj.compo=decodedToken.compo
    this.authObj.typeContrat=decodedToken.typcrm;
    this.authObj.username=decodedToken.iss

    this.contratService.findContrats(this.authObj).subscribe
    (
      (data)=>{

        this.contrat=data[0];
        console.log('data data:',JSON.stringify(this.authObj));

        console.log('this.contrat:',JSON.stringify(this.contrat));
      }
    )

  }
decodeToken (){
  return jwt_decode(this.tokenStorage.getToken())
}
  openDialog(guide: Guide) {
    this.dialog.open(HomeGuidesGuideComponent, {
      data: guide,
      width: '95%'
    });
  }
}




