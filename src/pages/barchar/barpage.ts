import { Component,OnInit} from '@angular/core';
import {IonicPage,NavController} from 'ionic-angular';
import {single} from './data';
import {LoginPage} from '../login/login';

@IonicPage() 
@Component({
  selector: 'page-bar',
  template: `
  <ion-header>
    
  <ion-navbar color="danger">
    <button ion-button menuToggle>
      <span class="button-inner">
          <ion-icon name="menu" role="img" aria-label="menu"></ion-icon>
      </span>
    </button>
    <div class="toolbar-content">
      <ion-title class="title">
        <div class="toolbar-title">
          MENU
        </div>
      </ion-title>
    </div>

    <ion-buttons end>
      <button ion-button icon-only (click)="goToLoginPage()">
          <div class="toolbar-content">
              <ion-title class="title">
                <div class="toolbar-title">
                  SALIR
                </div>
              </ion-title>
            </div>
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-menu [content]="elcontent">
      <ion-content>
        <ion-list>
          <p>mi menu</p>
        </ion-list>
      </ion-content>
  </ion-menu>
  <h3 style="color:blue">FACTURACION MENSUAL</h3>
  <ion-nav #elcontent [root]="BarPage"></ion-nav>
      <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br>
    <div>
        <h3 style="color:blue">Resumen del ultimo mes</h3>
        <div style="position:relative;padding-left:100px;">
            <div id="triangulo"></div>
            <div id="resultado">10 %</div>
        </div>
    </div>
  </ion-content>
  `
})
export class BarPage {
  single: any[];
  multi: any[];

  view: any[] = [370, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Mes';
  showYAxisLabel = true;
  yAxisLabel = 'Ventas (miles)';

  colorScheme = {
    domain: ['#7BB0D1']
  };

  constructor(public navCtrl: NavController) {
    Object.assign(this, {single});
  }

  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }
  onSelect(event) {
    console.log(event);
  }
}