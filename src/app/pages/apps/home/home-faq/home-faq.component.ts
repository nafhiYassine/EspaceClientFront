import { Component, OnInit } from '@angular/core';
import { ContratAnimal } from 'src/app/models/ContratAnimal';

@Component({
  selector: 'vex-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {

  constructor() { }
  listeContrats: string[] = [
    'Contract 1',
    'Contract 2',
    'Contract 3',
    // Add more contract names as needed
  ];
  ngOnInit() {
  }

}
