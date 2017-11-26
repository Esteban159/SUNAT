import { Component } from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';
import {BarPage} from "../barchar/barpage";
@IonicPage()
@Component({
  selector: 'page-situacion',
  templateUrl: 'situacion.html',
})
export class Situacion{
    constructor(public navCtrl: NavController){
    }
    gotobar(){
        this.navCtrl.setRoot('BarPage');
    }
}