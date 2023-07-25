import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import { trackByRoute } from '../../../../@vex/utils/track-by';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { LayoutService } from 'src/@vex/services/layout.service';
import { link } from 'fs';

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
  isDesktop$ = this.layoutService.isDesktop$;
  iSBool = true ;
  links: (Link & { icon: string })[] = [
    {
      label: 'Mon contrat',
      route: 'mon-contrat',
      icon: 'mat:chrome_reader_mode'
    },
    {
      label: 'Ma carte de tiers payant',
      route: 'pricing',
      icon: 'mat:card_membership'
    },
    {
      label: 'Mes documents',
      route: 'guides',
      icon: 'mat:description'
    },
    {
      label: 'Mes remboursements',
      route: 'faq',
      icon: 'mat:undo'
    },
    {
      label: 'Mes prises en charge',
      route: 'pec',
      icon: 'mat:euro_symbol'
    }
  ];

  trackByRoute = trackByRoute;
  // isDesktop$  = this.layoutService.isDesktop$;
  isMobile$  = this.layoutService.isMobile$;
  isDesktopValue : boolean;
  isMobileValue : boolean;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.iSBool = true;
      } else {
        this.iSBool = false;
        this.links = [
          {
            label: 'Mon contrat',
            route: 'pages/invoice',
            icon: 'mat:chrome_reader_mode'
          },
          {
            label: 'Ma carte de tiers payant',
            route: 'w',
            icon: 'mat:card_membership'
          },
          {
            label: 'Mes documents',
            route: 'v',
            icon: 'mat:description'
          },
          {
            label: 'Mes remboursements',
            route: 'z',
            icon: 'mat:undo'
          },
          {
            label: 'Mes prises en charge',
            route: 's',
            icon: 'mat:euro_symbol'
          }
        ];
      }
    });
  }
  

  // untilDestroyed(this){

  // }
}
