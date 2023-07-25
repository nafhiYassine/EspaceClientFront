import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondToolbarSearchComponent } from './second-toolbar-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SecondToolbarSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SecondToolbarSearchComponent]
})
export class SecondToolbarSearchModule {
}
