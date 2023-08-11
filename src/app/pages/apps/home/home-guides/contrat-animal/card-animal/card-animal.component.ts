import { Component, Input } from '@angular/core';

@Component({
  selector: 'vex-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent {
@Input()
listeAnimaux;
}
