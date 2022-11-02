/*esta componente va a ser inyectado en los componentes, LOS COMPONENTES SON LOS QUE LO VAN A CONSUMIR*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>  {
    /*console.log   ("el servicio portfolio esta corriendo")*/

     /*aca en lugar de 'json' mas adelante iria un url para comunicarse y enviar un request para devolver los datos.*/
     /*--------->/* /*return this.http.get('json');*/

     /*finalmente hay que indicar la ruta de donde va a obtener el json:*/

        return this.http.get('./../assets/data/data.json')
          }

}


