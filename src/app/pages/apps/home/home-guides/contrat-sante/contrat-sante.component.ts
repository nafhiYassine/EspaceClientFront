import { Component, Input, OnInit } from '@angular/core';
import { AuthObject } from 'src/app/models/AuthObject';
import { Data } from 'src/app/models/Data';
import { IContrat } from 'src/app/models/IContrat';

@Component({
  selector: 'vex-contrat-sante',
  templateUrl: './contrat-sante.component.html',
  styleUrls: ['./contrat-sante.component.scss']
})
export class ContratSanteComponent  implements OnInit{


  @Input()
  data :Data={
  };

  @Input()
  authObj:AuthObject={
  };
  contratSante : IContrat ;

  ngOnInit(): void {
    if(this.data?.listeContrats && this.data.listeContrats.length){
      this.contratSante = this.data.listeContrats[0];

    }
  }

}
