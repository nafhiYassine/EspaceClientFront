import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { AuthObject } from 'src/app/models/AuthObject';
import { ContratSante } from 'src/app/models/ContratSante';
import { Cotisation } from 'src/app/models/Cotisation';
import { IContrat } from 'src/app/models/IContrat';

@Component({
  selector: 'vex-cotisations',
  templateUrl: './cotisations.component.html',
  styleUrls: ['./cotisations.component.scss']
})
export class CotisationsComponent implements OnInit {

  
  @Input()
  data :Data={
  };

  @Input()
  authObj:AuthObject={
  };


  contratSante : IContrat ;
  listCotisations: Cotisation[];
  statut:String;


  ngOnInit(): void {
    if(this.data?.listeContrats && this.data.listeContrats.length){
      this.contratSante = this.data.listeContrats[0];
      
      this.listCotisations=(this.data.listeContrats[0] as ContratSante ).cotisations;
      console.log("List Cotisations   :"+JSON.stringify(this.listCotisations));
    }
  }





}
