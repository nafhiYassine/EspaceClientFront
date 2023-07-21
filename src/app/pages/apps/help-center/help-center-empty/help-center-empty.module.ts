import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterEmptyRoutingModule } from './help-center-empty-routing.module';
import { HelpCenterEmptyComponent } from './help-center-empty.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HelpCenterEmptyComponent],
  imports: [
    CommonModule,
    HelpCenterEmptyRoutingModule,
    MatExpansionModule
  ]
})
export class HelpCenterEmptyModule {
}
