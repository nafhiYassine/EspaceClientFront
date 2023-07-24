import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeGettingStartedComponent } from './home-getting-started.component';


const routes: Routes = [
  {
    path: '',
    component: HomeGettingStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeGettingStartedRoutingModule {
}
