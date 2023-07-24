import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HomeFaqComponent } from './home-faq.component';


const routes: Routes = [
  {
    path: '',
    component: HomeFaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HomeFaqRoutingModule {
}
