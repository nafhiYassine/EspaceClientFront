import { Component, Input } from '@angular/core';

@Component({
  selector: 'vex-cotisations',
  templateUrl: './cotisations.component.html',
  styleUrls: ['./cotisations.component.scss']
})
export class CotisationsComponent {
  @Input() authObj;

}
