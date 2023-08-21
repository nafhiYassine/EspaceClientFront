import { Component, Input } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { Product } from 'src/app/models/Product';

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
  @Input() droit_carte_tp:string;
  @Input() droit_teletransmission:string;
  @Input() regime_sociale:string;
  

  @Input() listProducts:Product[];
  
  
}
