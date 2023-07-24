import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeComponent } from './home.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


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
        path: 'pricing',
        loadChildren: () => import('./home-pricing/home-pricing.module').then(m => m.HomePricingModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./home-faq/home-faq.module').then(m => m.HomeFaqModule)
      },
      {
        path: 'guides',
        loadChildren: () => import('./home-getting-started/home-getting-started.module').then(m => m.HomeGettingStartedModule)
      },
      {
        path: 'pec',
        loadChildren: () => import('./home-empty/home-empty.module').then(m => m.HomeEmptyModule)
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
