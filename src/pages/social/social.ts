import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialServiceProvider } from '../../providers/social-service/social-service';
import { DetallesPage } from '../detalles/detalles';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

    users: any[] = [];
    
  constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams,
        public SocialServiceProvider: SocialServiceProvider) {
  }

  ionViewDidLoad() {
		this.SocialServiceProvider.GetSociales()
		.subscribe(
		(data) => {
			this.users = data['response'];
		},
		(error) => {
			console.error(error);
		})
	}
    
    GoDetalles(id) {
        this.navCtrl.push(DetallesPage, {id :id});
    }
}
