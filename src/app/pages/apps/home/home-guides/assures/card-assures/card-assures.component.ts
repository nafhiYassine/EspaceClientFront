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
      this.dateNaissance=this.beneficiaire.dateNaissance;
      this.regass=this.beneficiaire.regass;
      this.idfnss=this.beneficiaire.idfnss;
      this.droit_carte_tp=this.beneficiaire.droit_carte_tp;
      this.droit_teletransmission=this.beneficiaire.droit_teletransmission;
      this.regime_sociale=this.beneficiaire.regime_sociale;
  

  }
  details = false;
  regass: String="MALADIE";
  dateNaissance : String ;
  idfnss:String;
  droit_carte_tp:String;
  droit_teletransmission:String;
  listProducts:Product[];
  regime_sociale:String;
  kcle:String;
  
  getDetails(beneficiaire) {
   
    console.log("details called",this.listProducts)
    
  }




}
