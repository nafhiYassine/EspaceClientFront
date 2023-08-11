import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../../../@vex/interfaces/vex-route.interface';
import { DemandesComponent } from './demandes.component';
import { NouvelleDemandeComponent } from './nouvelle-demande/nouvelle-demande.component';


const routes: VexRoutes = [
  {
    path: '',
    component: DemandesComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class DemandesRoutingModule {
}
