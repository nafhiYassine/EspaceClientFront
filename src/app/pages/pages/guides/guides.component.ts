import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  HelpCenterGuidesGuideComponent
} from '../../apps/help-center/help-center-guides/help-center-guides-guide/help-center-guides-guide.component';
import { Guide, GuideCategory } from '../../apps/help-center/help-center-guides/help-center-guides.component';
import { trackById } from '../../../../@vex/utils/track-by';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class GuidesComponent implements OnInit {

  guides: Guide[] = [
    {
      id: 11,
      label: 'Du 01/02/2022 au 01/02/2023',
      icon: 'mat:description',
      category: GuideCategory.billing,
      amount: 110,
      onClick: guide => this.openDialog(guide)
    },
  ];

  accountSettings = this.guides.filter(guide => guide.category === GuideCategory.accountSettings);
  apiHelp = this.guides.filter(guide => guide.category === GuideCategory.apiHelp);
  billing = this.guides.filter(guide => guide.category === GuideCategory.billing);
  firstSteps = this.guides.filter(guide => guide.category === GuideCategory.firstSteps);

  trackById = trackById;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(guide: Guide) {
    this.dialog.open(HelpCenterGuidesGuideComponent, {
      data: guide,
      width: '600px'
    });
  }
}
