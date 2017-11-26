import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarPage } from './barpage';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    BarPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(BarPage),
  ],
  exports: [
    BarPage
  ]
})
export class BarPageModule {}