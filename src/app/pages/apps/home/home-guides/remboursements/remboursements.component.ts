import { Component, OnInit } from '@angular/core';
import { ContratSante } from 'src/app/models/ContratSante';
import { Data } from 'src/app/models/Data';
import { Prestation } from 'src/app/models/Prestation';
import { PrestationService } from 'src/app/services/prestation.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'vex-remboursements',
  templateUrl: './remboursements.component.html',
  styleUrls: ['./remboursements.component.scss']
})
export class RemboursementsComponent implements OnInit {

  constructor(private sharedData: SharedDataService, private prestationService: PrestationService) {
  }
  listePrestations: Prestation[]
  displayDetails: boolean = false;
  prestation: Prestation;
  listAnnees: number[];
  annees = [];

  ngOnInit(): void {
    this.listePrestations=[];
   this.listAnnees=[]
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++authobj",JSON.stringify(this.sharedData.authObj))
    this.prestationService.findAnnees(this.sharedData.authObj).subscribe(

      (res) => {
        this.annees = res;
        this.listePrestations =  this.chargerDerniereAnnee(this.annees[0]);

      }
    )

  }

  chargerDerniereAnnee(annee:any):any{
    this.prestationService.findPrestationByAnne(this.sharedData.authObj,annee).subscribe(
      (res) => {
        this.listePrestations = res;
      }
    )
  }

  chargerByAnnee($event:any):any{
    this.listePrestations=[];
    this.prestationService.findPrestationByAnne(this.sharedData.authObj,$event.value).subscribe(
      (res) => {
        this.listePrestations = res;
      }
    )
  }

}
