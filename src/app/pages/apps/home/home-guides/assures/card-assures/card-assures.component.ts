import { Component,Input, OnInit } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'vex-card-assures',
  templateUrl: './card-assures.component.html',
  styleUrls: ['./card-assures.component.scss']
})
export class CardAssuresComponent implements OnInit {

  @Input() beneficiaire: Beneficiaire

  ngOnInit(): void {
      this.listProducts=this.beneficiaire.listProducts;
  }
  details = false;
  regass: string="MALADIE";
  dateNaissance : string ="18/07/1991";
  idfnss:string;
  droit_carte_tp:string;
  droit_teletransmission:string;
  listProducts:Product[];
  regime_sociale:string;
  
  getDetails(beneficiaire) {
    this.dateNaissance=beneficiaire.dateNaissance;
    this.regass=beneficiaire.regass;
    this.idfnss=beneficiaire.idfnss;
    this.droit_carte_tp=beneficiaire.droit_carte_tp;
    this.droit_teletransmission=beneficiaire.droit_teletransmission;
    this.details = !this.details;
    this.listProducts=beneficiaire.listProducts;
    this.regime_sociale=beneficiaire.regime_sociale;
    console.log("details called",this.listProducts)
    
  }




}
