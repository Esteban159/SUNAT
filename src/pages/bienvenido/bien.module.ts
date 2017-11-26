import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {bienPage} from './bien';

@NgModule({
  declarations: [
    bienPage
  ],
  imports: [
    IonicPageModule.forChild(bienPage),
  ],
  exports: [
    bienPage
  ]
})
export class bienPageModule {
}
