import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
    
    correo: string;
    password: string;
    password2: string;
    nombre: string;   
    registro: string;
    data: any[] = [];

    constructor
    (
        public navCtrl: NavController, 
         public navParams: NavParams,
         public menu: MenuController, 
         public toastCtrl: ToastController,
         public LoginServiceProvider: LoginServiceProvider  
    ){}

    ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    }
    
    ValidarFormulario()
    {
        this.ValidarCamposVacios();
    }
    
    ValidarCamposVacios()
    {
        if(this.nombre == "" || this.nombre == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Debes indicar tu nombre',
				duration: 3000
			});
			toast.present();
        }
        else if(this.correo == "" || this.correo == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Debes indicar tu correo electrónico',
				duration: 3000
			});
			toast.present();
        }
        else if(this.password == "" || this.password == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Debes indicar tu contraseña',
				duration: 3000
			});
			toast.present();
        }
        else if(this.password2 == "" || this.password2 == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Debes confirmar tu contraseña',
				duration: 3000
			});
			toast.present();
        }
        else if(this.password2 != this.password2 )
        {
            let toast = this.toastCtrl.create({
				message: 'Las contraseñas no coinsiden',
				duration: 3000
			});
			toast.present();
        }
        else
        {
            this.RegistarUsuario();
        }
    }
    
    RegistarUsuario()
    {
        this.LoginServiceProvider.RegistrarUsuario(this.nombre,this.correo,this.password)
                .subscribe(
                (data) => {
                    this.registro = data['response'];
                   
                },
                (error) => {
                    console.error(error);
                   
                })            
    }
    
    ionViewDidEnter() 
    {
        this.menu.enable(false);
    }

    ionViewWillLeave() 
    {
        this.menu.enable(true);
    }
   
}
