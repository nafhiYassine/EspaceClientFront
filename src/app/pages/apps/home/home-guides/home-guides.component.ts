import { Component, OnInit } from '@angular/core';
import { trackById } from '../../../../../@vex/utils/track-by';
import { MatDialog } from '@angular/material/dialog';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { LayoutService } from '../../../../../@vex/services/layout.service';
import { Contrat } from 'src/app/models/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { Souscripteur } from 'src/app/models/souscripteur';
import { SouscripteurService } from 'src/app/services/souscripteur.service';

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
  contrat :Contrat={

  };
  souscripteur:Souscripteur={
    nom: '',
    prenom: '',
    idfnss:''
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
    private dialog: MatDialog,private contratService:ContratService,private souscripteurService:SouscripteurService,
    private layoutService: LayoutService) { }
  ngOnInit() {

    console.log("helleoooo")
    this.contratService.findContrats().subscribe
    (
      (data)=>{
        console.log("data",data)

        this.contrat=data[0];
        console.log('data:',JSON.stringify(data[0]));

        console.log('this.contrat:',JSON.stringify(this.contrat));
      }
    )
    this.souscripteurService.findSouscripteur("roumiguieres@orange.fr","COVERTY").subscribe (
      (data)=>{
        console.log("data",data)
        this.souscripteur=data;
        console.log('this.souscripteur:',JSON.stringify(this.souscripteur));
      }
    )

  }

  openDialog(guide: Guide) {
    this.dialog.open(HomeGuidesGuideComponent, {
      data: guide,
      width: '95%'
    });
  }
}
