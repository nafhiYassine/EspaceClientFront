import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ContratAnimal } from 'src/app/models/ContratAnimal';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'vex-contrat-animal',
  templateUrl: './contrat-animal.component.html',
  styleUrls: ['./contrat-animal.component.scss']
})
export class ContratAnimalComponent implements OnInit {
  colonnesAnimal: any[] = [
    {nom:'numeroContrat',entete:'Contrat'},
    //{nom:'numeroIdentification',entete:''},
    {nom:'nom',entete:'Nom'},
    {nom:'sexe',entete:'Sexe'},
    {nom:'genre',entete:'Genre'},
    {nom:'dateNaissance',entete:'Date Naissance'},
    {nom:'statutVacc',entete:'Statut'},
  ];
  listeAnimaux : Animal[] ;

  @Input()
  data :Data={
  };

  afficherColonnes: string[] = this.colonnesAnimal.map((column) => column.nom);
  ngOnInit(): void {
    this.listeAnimaux = [];

      for (const contrat of this.data.listeContrats as ContratAnimal[]) {
        let animal = contrat.animal ;
        animal.numeroContrat = contrat.numeroContrat ;
        this.listeAnimaux.push(animal);
      }
  }

}
