import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeGettingStartedRoutingModule } from './home-getting-started-routing.module';
import { HomeGettingStartedComponent } from './home-getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AioTableComponent } from '../../aio-table/aio-table.component';
import { AioTableModule } from '../../aio-table/aio-table.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocumentMobileComponent } from '../document-mobile/document-mobile.component';
import { HomeModule } from '../home.module';
import { ComponentsOverviewProgressSpinnerModule } from 'src/app/pages/ui/components/components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighlightModule } from 'src/@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [HomeGettingStartedComponent],
  imports: [
    CommonModule,
    HomeGettingStartedRoutingModule,
    MatExpansionModule ,
    FlexLayoutModule,
    ComponentsOverviewProgressSpinnerModule,
    MatProgressSpinnerModule,
    HighlightModule

    // HomeModule
  ]
})
export class HomeGettingStartedModule {
}
