import { Component, Input } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';

@Component({
  selector: 'vex-card-down-assures',
  templateUrl: './card-down-assures.component.html',
  styleUrls: ['./card-down-assures.component.scss']
})
export class CardDownAssuresComponent {

  @Input()
  beneficiaire:Beneficiaire;

   @Input() dateNaissance:string
  @Input() regass:string
  @Input() idfnss:string 
}
