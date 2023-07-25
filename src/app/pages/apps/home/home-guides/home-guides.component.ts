import { Component, OnInit } from '@angular/core';
import { trackById } from '../../../../../@vex/utils/track-by';
import { MatDialog } from '@angular/material/dialog';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { LayoutService } from '../../../../../@vex/services/layout.service';

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
    private dialog: MatDialog,
    private layoutService: LayoutService) { }
  ngOnInit() {
  }

  openDialog(guide: Guide) {
    this.dialog.open(HomeGuidesGuideComponent, {
      data: guide,
      width: '95%'
    });
  }
}
