import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {Situacion} from './situacion';

@NgModule({
  declarations: [
    Situacion,
  ],
  imports: [
    IonicPageModule.forChild(Situacion),
  ],
  exports: [
    Situacion
  ]
})
export class SituacionModule {}