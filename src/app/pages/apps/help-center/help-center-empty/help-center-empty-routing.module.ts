import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HelpCenterEmptyComponent } from './help-center-empty.component';


const routes: Routes = [
  {
    path: '',
    component: HelpCenterEmptyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HelpCenterEmptyRoutingModule {
}
