import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooPageRoutingModule } from './foo-routing.module';

import { FooPage } from './foo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooPageRoutingModule
  ],
  declarations: [FooPage]
})
export class FooPageModule {}
