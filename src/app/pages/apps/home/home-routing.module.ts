import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeComponent } from './home.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { RemboursementsComponent } from './home-guides/remboursements/remboursements.component';


const routes: VexRoutes = [

  {


    path: '',
    component: HomeComponent,


    data: {
      toolbarShadowEnabled: true
    },
    children: [
      {
        path: '',
        redirectTo: 'mon-contrat',
        pathMatch: 'full'
      },
      {
        path: 'mon-contrat',
        loadChildren: () => import('./home-guides/home-guides.module').then(m => m.HomeGuidesModule)
      },
      {
        path: 'ctp',
        loadChildren: () => import('./home-pricing/home-pricing.module').then(m => m.HomePricingModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./home-getting-started/home-getting-started.module').then(m => m.HomeGettingStartedModule)
      },
      {
        path: 'remboursements',
        component:RemboursementsComponent,
      },
      {
        path: 'pec',
        loadChildren: () => import('./home-empty/home-empty.module').then(m => m.HomeEmptyModule)
      },
      {
        path: 'demandes',
        loadChildren: () => import('./home-guides/demandes/demandes.module').then(m => m.DemandesModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeRoutingModule {
}
