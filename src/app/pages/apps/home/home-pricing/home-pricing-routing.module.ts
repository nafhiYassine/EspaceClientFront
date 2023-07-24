import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomePricingComponent } from './home-pricing.component';


const routes: Routes = [
  {
    path: '',
    component: HomePricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomePricingRoutingModule {
}
