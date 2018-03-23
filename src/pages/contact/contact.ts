import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = navParams.get('data');
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad AboutPage");
  }

}
