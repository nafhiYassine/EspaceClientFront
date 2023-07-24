import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFaqRoutingModule } from './home-faq-routing.module';
import { HomeFaqComponent } from './home-faq.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HomeFaqComponent],
  imports: [
    CommonModule,
    HomeFaqRoutingModule,
    MatExpansionModule
  ]
})
export class HomeFaqModule {
}
