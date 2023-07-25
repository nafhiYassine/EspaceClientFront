import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondToolbarComponent } from './second-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { SecondToolbarSearchModule } from './second-toolbar-search/second-toolbar-search.module';
import { NavigationModule } from '../navigation/navigation.module';
import { RouterModule } from '@angular/router';
import { NavigationItemModule } from '../../components/navigation-item/navigation-item.module';
import { MegaMenuModule } from '../../components/mega-menu/mega-menu.module';

@NgModule({
  declarations: [SecondToolbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    SecondToolbarSearchModule,
    NavigationModule,
    RouterModule,
    NavigationItemModule,
    MegaMenuModule
  ],
  exports: [SecondToolbarComponent]
})
export class SecondToolbarModule {
}
