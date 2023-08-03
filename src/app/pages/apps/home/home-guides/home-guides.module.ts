import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeGuidesRoutingModule } from './home-guides-routing.module';
import { HomeGuidesComponent } from './home-guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContratsComponent } from './contrats/contrats.component';


@NgModule({
  declarations: [HomeGuidesComponent, HomeGuidesGuideComponent,ContratsComponent],
  imports: [
    CommonModule,
    HomeGuidesRoutingModule,


    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class HomeGuidesModule {
}
