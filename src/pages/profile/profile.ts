import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
}) 
export class ProfilePage {
    
    nombre: string;
    correo: string;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
      this.nombre = localStorage.getItem("nombre");
      this.correo = localStorage.getItem("correo");
      
  }
    
    Cerrarsesion()
    {
        localStorage.clear();
        this.navCtrl.push(LoginPage);
    }

}
