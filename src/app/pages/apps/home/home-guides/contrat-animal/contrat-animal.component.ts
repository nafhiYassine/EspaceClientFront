import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ContratAnimal } from 'src/app/models/ContratAnimal';
import { Data } from 'src/app/models/Data';
import { Formule } from 'src/app/models/formule';

@Component({
  selector: 'vex-contrat-animal',
  templateUrl: './contrat-animal.component.html',
  styleUrls: ['./contrat-animal.component.scss']
})
export class ContratAnimalComponent implements OnInit {

  @Input()
  data: Data = {
  };


  ngOnInit(): void {

  }
}
