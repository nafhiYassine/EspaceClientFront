import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeGettingStartedRoutingModule } from './home-getting-started-routing.module';
import { HomeGettingStartedComponent } from './home-getting-started.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AioTableComponent } from '../../aio-table/aio-table.component';
import { AioTableModule } from '../../aio-table/aio-table.module';


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
