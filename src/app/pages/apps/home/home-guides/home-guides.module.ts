import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGuidesRoutingModule } from './home-guides-routing.module';
import { HomeGuidesComponent } from './home-guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ContratsComponent } from './contrats/contrats.component';
import { SouscripteurComponent } from './souscripteur/souscripteur.component';
import { ContratSanteComponent } from './contrat-sante/contrat-sante.component';
import { ContratAnimalComponent } from './contrat-animal/contrat-animal.component';
import { AssuresComponent } from './assures/assures.component';
import { CotisationsComponent } from './cotisations/cotisations.component';
import { DocumentHomeComponent } from './document-home/document-home.component';
import { CardAssuresComponent } from './assures/card-assures/card-assures.component';
import { InfosBancairesComponent } from './infos-bancaires/infos-bancaires.component';
import { CardAnimalComponent } from './contrat-animal/card-animal/card-animal.component';
import { CardDownAssuresComponent } from './assures/card-assures/card-down-assures/card-down-assures.component';
import { RemboursementsComponent } from './remboursements/remboursements.component';
import { RemboursementsCardDownComponent } from './remboursements/remboursements-card-down/remboursements-card-down.component';
import { RemboursementsCardComponent } from './remboursements/remboursements-card/remboursements-card.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DecimalTransformerPipe } from './cotisations/decimal-transformer.pipe';



@NgModule({
  declarations: [HomeGuidesComponent, HomeGuidesGuideComponent, ContratsComponent, SouscripteurComponent, ContratSanteComponent, ContratAnimalComponent, AssuresComponent, CotisationsComponent, InfosBancairesComponent, CardAnimalComponent,CardDownAssuresComponent,DocumentHomeComponent,CardAssuresComponent
  ,RemboursementsComponent, RemboursementsCardDownComponent, RemboursementsCardComponent, DecimalTransformerPipe],
  imports: [
    CommonModule,
    HomeGuidesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule ,
    MatButtonToggleModule

  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class HomeGuidesModule {
}
