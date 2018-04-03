import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import {Md5} from '../../ts-md5/dist/md5';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    user: string; 
    correo: string;
    password: string;
    nombre: string;
    registro: any[] = [];
    
    constructor
    (
        public navCtrl: NavController, 
        public navParams: NavParams,
        public toastCtrl: ToastController,
        public menu: MenuController, 
        public LoginServiceProvider: LoginServiceProvider  
    )
    {}

    ionViewDidLoad() 
    {    
        if(localStorage.getItem("user") != null)
        {
            this.navCtrl.push(HomePage); 
        }
        
    }

    GoRegistro()
	{
		this.navCtrl.push(RegistroPage);
	}
    
    ValidarLogIn()
    {
        if(this.user == "" || this.user == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Por favor ingresa tu nombre de usuario',
				duration: 3000
			});
			toast.present();
        }
        else if(this.password == "" || this.password == null)
        {
            let toast = this.toastCtrl.create({
				message: 'Por favor ingresa tu contraseña',
				duration: 3000
			});
			toast.present();
        }
        else
        {
            this.LoginServiceProvider.ValidarLogin(this.user)
                .subscribe(
                (data) => {
                    this.registro = data['response'];
                   
                    if(this.registro["password"] != Md5.hashStr(this.password))
                    {
                        let toast = this.toastCtrl.create({
                            message: 'Las contraseña es incorrecta',
                            duration: 3000
                        });
                        toast.present();
                    }
                    else
                    {
                        localStorage.setItem("nombre",this.registro["nombre"]);
                        localStorage.setItem("user",this.user);
                        localStorage.setItem("id",this.registro["id"]);
                        //localStorage.getItem("var_1");
                        this.navCtrl.push(HomePage);
                    }
                    
                },
                (error) => {
                    console.error(error);
                    let toast = this.toastCtrl.create({
                            message: "Usuario no registrado",
                            duration: 3000
                        });
                        toast.present();
                })            
        }
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
