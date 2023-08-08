import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LayoutService } from 'src/@vex/services/layout.service';
import { Beneficiaire } from 'src/app/models/Beneficiaire';
import { ContratSante } from 'src/app/models/ContratSante';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'vex-assures',
  templateUrl: './assures.component.html',
  styleUrls: ['./assures.component.scss']
})
export class AssuresComponent implements OnInit {

  isDesktop$ = this.layoutService.isDesktop$;
  isBool = false;
  @Input()
  authObj;

  listBeneficiaire:Beneficiaire[]=[];

  gotoDetails(listBeneficiaire:Beneficiaire[]){
    console.log("******go To Details ")
    const encodedDataList=encodeURIComponent(JSON.stringify(this.listBeneficiaire))
  //  this.router.navigateByUrl("/apps/home/mon-contrat/details")
     this.router.navigate(['/apps/home/mon-contrat/details'],{queryParams:{data:encodedDataList}})

  }

  @Input()
  data:Data ;
  constructor(private router:Router,private layoutService: LayoutService){

  }
  ngOnInit(): void {

    this.listBeneficiaire=(this.data.listeContrats[0] as ContratSante ).listeBeneficiaire;

    console.log("fjlkjklbenef",JSON.stringify( (this.data.listeContrats[0] as ContratSante ).listeBeneficiaire))
    console.log("contrats",JSON.stringify( (this.data.listeContrats[0] as ContratSante )))
    this.isDesktop$.pipe(
      ).subscribe(isDesktop => {
        if (isDesktop) {
          this.isBool = true;
        } else {
          this.isBool = false;
        }
      });

  }







}
