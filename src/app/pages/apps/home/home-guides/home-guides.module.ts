import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGuidesRoutingModule } from './home-guides-routing.module';
import { HomeGuidesComponent } from './home-guides.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeGuidesGuideComponent } from './home-guides-guide/home-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ContratsComponent } from './contrats/contrats.component';


@NgModule({
  declarations: [HomeGuidesComponent, HomeGuidesGuideComponent, ContratsComponent],
  imports: [
    CommonModule,
    HomeGuidesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  schemas: [NO_ERRORS_SCHEMA]

})
export class HomeGuidesModule {
}
