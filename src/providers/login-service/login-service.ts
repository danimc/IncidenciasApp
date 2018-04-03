import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor
  (
        public http: HttpClient
  ){}
   
  
    
    ValidarLogin(user)
    {
        return this.http.get('http://177.245.226.71/API/Login/'+user);
    }
    
    RegistrarUsuario(nombre,user,password)
    {

        return this.http.post('http://api.easyclick.com.mx/Login/', JSON.stringify({ nombre: nombre, user: user,password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    }

}
