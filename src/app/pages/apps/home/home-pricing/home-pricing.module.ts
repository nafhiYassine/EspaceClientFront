import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePricingRoutingModule } from './home-pricing-routing.module';
import { HomePricingComponent } from './home-pricing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HomePricingComponent],
  exports: [
    HomePricingComponent
  ],
  imports: [
    CommonModule,
    HomePricingRoutingModule,

    MatButtonModule,
    MatIconModule
  ]
})
export class HomePricingModule {
}
