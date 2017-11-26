import { Component } from '@angular/core';
import { NavController,IonicPage,LoadingController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import {LoginPage} from '../login/login';

@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public service: ServiceProvider,
    public loadingCtrl: LoadingController) {
      setTimeout(()=>{
        this.createImgs();
      },1000);
      
  }
  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  id(name){
    return document.getElementById(name)
  }

  ce(name){
    return document.createElement(name);
  }
  createImgs(){
    var num = 6;
    var list =["enero","febrero","marzo","abril","mayo","junio"]
    var contenedor = this.id("elcontenedor");
    var titulo = this.ce("")
    var p = this.ce("p");
    p.innerHTML = "Ventas mensuales";
    var div = this.ce("div");
    div.style.width = 7*100+"px";
    div.style.height = "400px";
    //div.style.border="1px solid black";
    div.style.transform = "rotate(180deg)";
    //div.style.display  = "inline";
    var pl = null;
    var barras = null;
    for(var i=0; i<num;i++){
      barras = null;
      barras = this.ce("div");
      pl = this.ce("p");
      barras.style.width = "40px";
      barras.style.float = "left";
      barras.style.height = "300px";
      barras.style.marginLeft = "60px";
      barras.style.border  = "1px solid #82B6D5";
      barras.style.background = "#ACCFE4";
      pl.innerHTML = list[i];
      pl.style.position = "absolute";
      pl.style.top = "450px";
      pl.style.left = (120+100*i)+"px";
      contenedor.appendChild(pl);
      //barras.style.position = "absolute";
      //barras.style.bottom = "0px";
      //barras.style.left = (100*i)+"px";
      barras.style.zIndex  = "1";
      //barras.style.color = "rgb(230,230,230)";
      //console.log("rgb("+this.rgb()+","+this.rgb()+","+this.rgb()+")");
      div.appendChild(barras);
    }
    contenedor.appendChild(p);
    contenedor.appendChild(div);

  }

  rgb(){
    var r = Math.floor((Math.random() * 255) + 1);
    return r;
  }
}
