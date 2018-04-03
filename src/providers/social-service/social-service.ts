import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SocialServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialServiceProvider {

  constructor(public http: HttpClient) {
 
  }
    
    
    public GetSociales()
    {
        return this.http.get('http://api.easyclick.com.mx/Social/');
    }
    
    public GetDetalles(id)
    {
        return this.http.get('http://api.easyclick.com.mx/Social/'+id);
    }
}
