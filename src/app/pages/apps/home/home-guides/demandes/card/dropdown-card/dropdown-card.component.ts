import { Component, Input } from '@angular/core';

@Component({
  selector: 'vex-dropdown-card',
  templateUrl: './dropdown-card.component.html',
  styleUrls: ['./dropdown-card.component.scss']
})
export class DropdownCardComponent {
  @Input() commentaire:string
  @Input() reponse:string
}
