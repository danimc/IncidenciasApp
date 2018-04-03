import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams,
        public toastCtrl: ToastController
    ){}

  ionViewDidLoad() {
     let toast = this.toastCtrl.create({
				message: 'Bienvenido '+localStorage.getItem("nombre"),
				duration: 3000
			});
			toast.present();
  }

}
