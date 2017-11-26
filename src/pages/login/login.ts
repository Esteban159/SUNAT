import { Component } from '@angular/core';
import {AlertController,IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {BarPage} from '../barchar/barpage';
import {ServiceProvider} from '../../providers/service/service';
import{Situacion} from '../situacion/situacion';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    registerCredentials = {ruc:'',username: '', password: ''};

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private loadingCtrl: LoadingController,
        public service: ServiceProvider,
        public alertCtrl: AlertController) {

    }

    public login() {
        //si quieres ver el homePage descomentame pero comenta toda la funcion this.service.login
        //this.navCtrl.setRoot('Situacion');
        this.service.login(this.registerCredentials).subscribe(res => {
        
          if (res.success) {
            this.navCtrl.setRoot('HomePage');
          } else {
            this.showError("Access Denied");
          }
          console.log(res);
        });
    }

    showError(text) {
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
    }
}
