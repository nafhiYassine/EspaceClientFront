import { Component, Input } from '@angular/core';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'vex-infos-bancaires',
  templateUrl: './infos-bancaires.component.html',
  styleUrls: ['./infos-bancaires.component.scss']
})
export class InfosBancairesComponent {
  @Input()
data :Data
}
