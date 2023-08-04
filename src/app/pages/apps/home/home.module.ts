import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DocumentMobileComponent } from './document-mobile/document-mobile.component';
import { HomeGettingStartedComponent } from './home-getting-started/home-getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressSpinnerOverviewExampleComponent } from './progress-spinner-overview-example/progress-spinner-overview-example.component';
import { ComponentsModule } from '../../ui/components/components.module';
import { ComponentsOverviewProgressSpinnerModule } from '../../ui/components/components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighlightModule } from 'src/@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [HomeComponent,DocumentMobileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageLayoutModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatExpansionModule ,
    FlexLayoutModule,
    ComponentsModule,
    ComponentsOverviewProgressSpinnerModule,
    MatProgressSpinnerModule,
    HighlightModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/documents-Mobile' }, // Set the base URL here
    MatIconModule
  ],
})
export class HomeModule {
}
