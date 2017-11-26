import { Component,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { NavController,IonicPage,LoadingController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import {LoginPage} from '../login/login';
//import { File } from '@ionic-native/file';
@IonicPage() 
@Component({
  selector: 'page-bien',
  templateUrl: 'bien.html'
})
export class bienPage{
    @ViewChild('fileInp') fileInput: ElementRef;
    @Output() data = new EventEmitter<FormData>();
    constructor(public navCtrl: NavController){
        //this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
    }
    fileUpload(event) {
        let fd = new FormData();
        fd.append('file', event.srcElement.files[0]);
        this.data.emit(fd);
        console.log(event.srcElement.files[0]);
    }
    onClick() {
        this.fileInput.nativeElement.click();
    }
    gotoLogin(){
        this.navCtrl.setRoot('LoginPage');
    }
}