import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'vex-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit{

@Input()
data;

listeContrats ;


ngOnInit(): void {
  this.listeContrats = this.data.listeContrats;

}

}
