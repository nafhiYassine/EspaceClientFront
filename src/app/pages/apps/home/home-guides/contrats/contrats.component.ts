import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { AuthObject } from 'src/app/models/AuthObject';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'vex-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {

  data :Data={
  };

  @Input()
  authObj:AuthObject={
  };


  constructor(private dataService : DataService){
  }

  ngOnInit(): void {
    this.dataService.findData(this.authObj).subscribe
    (
      (response)=>{
        this.data=response;
        console.log('contrat:',response);
        this.data.listeContrats = JSON.parse(JSON.stringify(this.data.listeContrats));
        console.log('this.contrat:',JSON.stringify(this.data));
      }
    );


  }



}
