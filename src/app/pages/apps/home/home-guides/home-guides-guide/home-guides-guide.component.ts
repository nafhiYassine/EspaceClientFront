import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guide } from '../home-guides.component';

@Component({
  selector: 'vex-home-guides-guide',
  templateUrl: './home-guides-guide.component.html',
  styleUrls: ['./home-guides-guide.component.scss']
})
export class HomeGuidesGuideComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public guide: Guide) { }

  ngOnInit() {
  }

}
