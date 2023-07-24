import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesComponent } from './guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeGuidesModule } from '../../apps/home/home-guides/home-guides.module';



@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    MatButtonModule,

    MatListModule,
    MatIconModule,
    MatDialogModule,
    HomeGuidesModule
  ]
})
export class GuidesModule {
}
