import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeGuidesRoutingModule } from './home-guides-routing.module';
import { HomeGuidesComponent } from './home-guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [HomeGuidesComponent, HomeGuidesGuideComponent],
  imports: [
    CommonModule,
    HomeGuidesRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class HomeGuidesModule {
}
