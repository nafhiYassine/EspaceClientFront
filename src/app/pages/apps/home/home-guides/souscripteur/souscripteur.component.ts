import { Component, Input } from '@angular/core';
import { AuthObject } from 'src/app/models/AuthObject';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'vex-souscripteur',
  templateUrl: './souscripteur.component.html',
  styleUrls: ['./souscripteur.component.scss']
})
export class SouscripteurComponent {

  @Input()
  data :Data={
  };
  @Input()
  authObj :AuthObject={
  };
}
