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
  isBool = true;
  mobileLinks: (Link & { icon: string })[] = [
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
    },
    {
      label: 'Mes demandes et réclamations',
      route: 's',
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
    },
    {
      label: 'Mes demandes et réclamations',
      route: 's',
      icon: 'mat:supervised_user_circle'
    }
  ];

  trackByRoute = trackByRoute;
  isDesktop$ = this.layoutService.isDesktop$;
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.isDesktop$.pipe(
    ).subscribe(isDesktop => {
      if (isDesktop) {
        this.isBool = true;
      } else {
        this.isBool = false;
        this.links = this.mobileLinks;
      }
    });
  }

}
