import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooPage } from './foo.page';

const routes: Routes = [
  {
    path: '',
    component: FooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooPageRoutingModule {}
