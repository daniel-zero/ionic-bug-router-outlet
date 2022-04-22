import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'foo',
        pathMatch: 'full',
      },
      {
        path: 'foo',
        loadChildren: () =>
          import('../foo/foo.module').then((m) => m.FooPageModule),
      },
      {
        path: 'bar',
        loadChildren: () =>
          import('../bar/bar.module').then((m) => m.BarPageModule),
      },
      {
        path: 'baz',
        loadChildren: () =>
          import('../baz/baz.module').then((m) => m.BazPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
