import { AuthObject } from 'src/app/models/AuthObject';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ContratAnimal } from 'src/app/models/ContratAnimal';
import { Data } from 'src/app/models/Data';
import { IContrat } from 'src/app/models/IContrat';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'vex-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {



  @Input()
  data :Data={
  };

  @Input()
  authObj:AuthObject={
  };

  contratSante : IContrat ;
  listeAnimaux : Animal[] ;

  colonnesAnimal: any[] = [
    {nom:'numeroContrat',entete:'Contrat'},
    //{nom:'numeroIdentification',entete:''},
    {nom:'nom',entete:'Nom'},
    {nom:'sexe',entete:'Sexe'},
    {nom:'genre',entete:'Genre'},
    {nom:'dateNaissance',entete:'Date Naissance'},
    {nom:'statutVacc',entete:'Statut'},
  ];

  afficherColonnes: string[] = this.colonnesAnimal.map((column) => column.nom);


  constructor(private dataService : DataService){
  }

  ngOnInit(): void {
    if(this.data?.listeContrats && this.data.listeContrats.length){
      this.listeAnimaux = [];
      console.log('this.authObj.typeContrat' + this.authObj.typeContrat)
      if(this.authObj.typeContrat=='A'){
        for (const contrat of this.data.listeContrats as ContratAnimal[]) {
          let animal = contrat.animal ;
          //animal.numeroContrat = contrat.numeroContrat ;
          this.listeAnimaux.push(animal);
        }
      }else if(this.authObj.typeContrat=='I'){
          this.contratSante = this.data.listeContrats[0];
      }
    }
  }



}
