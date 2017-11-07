import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    arr = ["korea", "france", "brazil"]

  constructor(public navCtrl: NavController) {

  }

}
