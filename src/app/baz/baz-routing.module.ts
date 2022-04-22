import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BazPage } from './baz.page';

const routes: Routes = [
  {
    path: '',
    component: BazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BazPageRoutingModule {}
