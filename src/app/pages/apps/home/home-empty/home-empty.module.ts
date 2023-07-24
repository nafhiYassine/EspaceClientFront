import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEmptyRoutingModule } from './home-empty-routing.module';
import { HomeEmptyComponent } from './home-empty.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HomeEmptyComponent],
  imports: [
    CommonModule,
    HomeEmptyRoutingModule,
    MatExpansionModule
  ]
})
export class HomeEmptyModule {
}
