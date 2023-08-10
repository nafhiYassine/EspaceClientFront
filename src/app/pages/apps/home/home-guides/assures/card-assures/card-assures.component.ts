import { Component,Input } from '@angular/core';


@Component({
  selector: 'vex-card-assures',
  templateUrl: './card-assures.component.html',
  styleUrls: ['./card-assures.component.scss']
})
export class CardAssuresComponent {
  @Input() dateNaissance:string
  @Input() regass:string
  @Input() idfnss:string

}
