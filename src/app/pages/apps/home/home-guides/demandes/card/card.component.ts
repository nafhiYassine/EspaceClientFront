import { Component } from '@angular/core';

@Component({
  selector: 'vex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  details = false;
  commentaire: string = "Explication sur remboursement Prévoyance - Contrat Individuel ou Ancien Salarié";
  reponse : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  getDetails() {
    this.details = !this.details;
    console.log("details called")
  }

}
