import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialServiceProvider } from '../../providers/social-service/social-service';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
    
    registro: any[] = [];
    nombre: string;
    eslogan: string;
    telefono: string;
    direccion: string;
    nosotros: string;
    id: string;
    correo: string;
    
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public SocialServiceProvider: SocialServiceProvider) {
      
       
      
      this.GetDetalles(this.navParams.get('id'));
  }

  ionViewDidLoad() {
    
  }
    
    GetDetalles(id)
    {
    this.SocialServiceProvider.GetDetalles(id)
            .subscribe(
            (data) => {
                this.registro = data['response'];
                this.nombre = this.registro["nombre"];
                this.eslogan = this.registro["eslogan"];
                this.telefono = this.registro["telefono"];
                this.correo = this.registro["correo"];
                this.direccion = this.registro["direccion"];
                this.nosotros = this.registro["nosotros"];
                this.id = this.registro["id"];
                 console.log(this.registro["nombre"]);

            },
            (error) => {
                console.error(error);
               
            })        
    }

}
