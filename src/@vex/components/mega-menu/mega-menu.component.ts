import { Component, OnInit } from '@angular/core';
import { PopoverRef } from '../popover/popover-ref';

export interface MegaMenuFeature {
  icon: string;
  label: string;
  route: string;
}

export interface MegaMenuPage {
  label: string;
  route: string;
}

@Component({
  selector: 'vex-mega-menu',
  templateUrl: './mega-menu.component.html'
})
export class MegaMenuComponent implements OnInit {

  features: MegaMenuFeature[] = [
    {
      icon: 'mat:layers',
      label: 'Dashboard',
      route: '/'
    },
    {
      icon: 'mat:assignment',
      label: 'AIO-Table',
      route: '/apps/aio-table'
    },
    {
      icon: 'mat:contact_support',
      label: 'Help Center',
      route: '/apps/home'
    },
    {
      icon: 'mat:contacts',
      label: 'Contacts',
      route: '/apps/contacts/grid'
    },
    {
      icon: 'mat:assessment',
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    },
    {
      icon: 'mat:book',
      label: 'Documentation',
      route: '/documentation'
    }
  ];

  pages: MegaMenuPage[] = [
    
    {
      label: 'Authentication',
      route: '/login'
    },
    {
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    },
    {
      label: 'Components',
      route: '/ui/components/overview'
    },
    {
      label: 'Documentation',
      route: '/documentation'
    },
    {
      label: 'FAQ',
      route: '/pages/faq'
    },
    {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    },
    {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    },
    {
      label: 'Guides',
      route: '/pages/guides'
    },
    {
      label: 'Help Center',
      route: '/apps/home'
    },
    {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }
  ];

  constructor(private popoverRef: PopoverRef<MegaMenuComponent>) { }

  ngOnInit() {
  }

  close() {
    this.popoverRef.close();
  }
}
