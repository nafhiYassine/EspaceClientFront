import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeGuidesComponent } from './home-guides.component';
import { RemboursementsComponent } from './remboursements/remboursements.component';


const routes: Routes = [
  {
    path: '',
    component: HomeGuidesComponent,
    children: [
      {
        path: 'remboursements',
        component: RemboursementsComponent,


      },]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeGuidesRoutingModule {
}
