import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeGettingStartedRoutingModule } from './home-getting-started-routing.module';
import { HomeGettingStartedComponent } from './home-getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HomeGettingStartedComponent],
  imports: [
    CommonModule,
    HomeGettingStartedRoutingModule,
    MatExpansionModule
  ]
})
export class HomeGettingStartedModule {
}
