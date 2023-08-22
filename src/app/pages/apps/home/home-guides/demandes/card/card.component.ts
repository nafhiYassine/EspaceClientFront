import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/Demande';

@Component({
  selector: 'vex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() demande : Demande
  details = false;
  getDetails() {
    this.details = !this.details;
    console.log("details called")
  }
  ngOnInit() {
  }

}
