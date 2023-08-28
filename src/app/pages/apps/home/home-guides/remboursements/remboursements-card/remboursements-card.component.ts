import { Component, Input, OnInit } from '@angular/core';
import { AuthObject } from 'src/app/models/AuthObject';
import { Data } from 'src/app/models/Data';
import { Prestation } from 'src/app/models/Prestation';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'vex-remboursements-card',
  templateUrl: './remboursements-card.component.html',
  styleUrls: ['./remboursements-card.component.scss']
})
export class RemboursementsCardComponent implements OnInit {
  constructor(private sharedDataService:SharedDataService){

  }
  displayDetails:boolean=false;
  @Input()
  prestation:Prestation;
  @Input()
  data:Data
authObject:AuthObject;

  ngOnInit(): void {
this.authObject=this.sharedDataService.authObj
  }
  getDetails(prestation:Prestation){
    this.displayDetails=!this.displayDetails;
    prestation=this.prestation;
  }
}
