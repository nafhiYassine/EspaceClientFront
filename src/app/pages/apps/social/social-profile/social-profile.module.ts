import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProfileRoutingModule } from './social-profile-routing.module';
import { SocialProfileComponent } from './social-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [SocialProfileComponent],
  exports: [
    SocialProfileComponent
  ],
  imports: [
    CommonModule,
    SocialProfileRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class SocialProfileModule {
}
