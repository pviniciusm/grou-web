import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: PageHomeComponent },
  { path: 'contato', pathMatch:'full', component: PageContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
