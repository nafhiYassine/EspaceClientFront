import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeEmptyComponent } from './home-empty.component';


const routes: Routes = [
  {
    path: '',
    component: HomeEmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeEmptyRoutingModule {
}
