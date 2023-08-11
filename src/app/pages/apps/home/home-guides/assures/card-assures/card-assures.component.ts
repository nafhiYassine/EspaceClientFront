import { Component,Input } from '@angular/core';
import { Beneficiaire } from 'src/app/models/Beneficiaire';


@Component({
  selector: 'vex-card-assures',
  templateUrl: './card-assures.component.html',
  styleUrls: ['./card-assures.component.scss']
})
export class CardAssuresComponent {

  @Input() beneficiaire: Beneficiaire

  details = false;
  regass: string="MALADIE";
  dateNaissance : string ="18/07/1991";
  idfnss:string;
  getDetails(beneficiaire) {
    this.dateNaissance=beneficiaire.dateNaissance;
    this.regass=beneficiaire.regass;
    this.idfnss=beneficiaire.idfnss;
    this.details = !this.details;
    console.log("details called",this.idfnss)
  }


/*   @Input() dateNaissance:string
  @Input() regass:string
  @Input() idfnss:string */

}
