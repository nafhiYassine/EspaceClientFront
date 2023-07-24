import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeGuidesComponent } from './home-guides.component';


const routes: Routes = [
  {
    path: '',
    component: HomeGuidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeGuidesRoutingModule {
}
