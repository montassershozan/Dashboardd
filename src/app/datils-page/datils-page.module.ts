import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatilsPageRoutingModule } from './datils-page-routing.module';
import { SecPageComponent } from './secpage/secpage.component';


@NgModule({
  declarations: [
    SecPageComponent
  ],
  imports: [
    CommonModule,
    DatilsPageRoutingModule
  ]
})
export class DatilsPageModule { }
