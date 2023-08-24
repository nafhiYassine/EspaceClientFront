import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import { trackByRoute } from '../../../../@vex/utils/track-by';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { LayoutService } from 'src/@vex/services/layout.service';
import { link } from 'fs';
import { TokenStorageService } from 'src/app/services/token-storage-service';
import jwt_decode from 'jwt-decode';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'vex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    stagger40ms,
    fadeInUp400ms
  ]
})
export class HomeComponent implements OnInit {

  isBool = true;
  isAnimal = true;
  mobileLinks: (Link & { icon: string })[] = [
    {
      label: 'Mon contrat',
      route: 'mon-contrat',
      icon: 'mat:chrome_reader_mode'
    },
    {
      label: 'Ma carte de tiers payant',
      route: 'ctp',
      icon: 'mat:card_membership'
    },
    {
      label: 'Mes documents',
      route: this.baseHref || '/documents-Mobile',
      icon: 'mat:description'
    },
    {
      label: 'Mes remboursements',
      route: 'remboursements',
      icon: 'mat:undo'
    },
    {
      label: 'Mes prises en charge',
      route: 'pec',
      icon: 'mat:euro_symbol'
    },
    {
      label: 'Mes demandes et réclamations',
      route: 'demandes',
      icon: 'mat:supervised_user_circle'
    }
  ];

  links: (Link & { icon: string })[] = [
    {
      label: 'Mon contrat',
      route: 'mon-contrat',
      icon: 'mat:chrome_reader_mode'
    },
    {
      label: 'Ma carte de tiers payant',
      route: 'ctp',
      icon: 'mat:card_membership'
    }
    ,
    {
      label: 'Mes documents',
      route: 'documents',
      icon: 'mat:description'
    },
    {
      label: 'Mes remboursements',
      route: 'remboursements',
      icon: 'mat:undo'
    },
    {
      label: 'Mes prises en charge',
      route: 'pec',
      icon: 'mat:euro_symbol'
    },
    {
      label: 'Mes demandes et réclamations',
      route: 'demandes',
      icon: 'mat:supervised_user_circle'
    }
  ];
  linksAnimal: (Link & { icon: string })[] = [
    {
      label: 'Mon contrat',
      route: 'mon-contrat',
      icon: 'mat:chrome_reader_mode'
    },
    {
      label: 'Mes documents',
      route: 'documents',
      icon: 'mat:description'
    },
    {
      label: 'Mes remboursements',
      route: 'remboursements',
      icon: 'mat:undo'
    },
    {
      label: 'Mes prises en charge',
      route: 'pec',
      icon: 'mat:euro_symbol'
    },
    {
      label: 'Mes demandes et réclamations',
      route: 'demandes',
      icon: 'mat:supervised_user_circle'
    }
  ];

  trackByRoute = trackByRoute;
  isDesktop$ = this.layoutService.isDesktop$;
  typecrm : string ;

  constructor(private layoutService: LayoutService
    , @Optional() @Inject(APP_BASE_HREF) private baseHref: string
    , private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    const decodedToken: any = jwt_decode(this.tokenStorage.getToken());

    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.typecrm = decodedToken.typcrm;
        if (this.typecrm == 'A') {
          console.log(decodedToken)
          this.isAnimal = true;
          this.links = this.linksAnimal;
        }
        else {
          this.isAnimal = false;
        }
        this.isBool = true;
      } else {
        this.isBool = false;
        this.links = this.mobileLinks;
      }
    });
  }

}
