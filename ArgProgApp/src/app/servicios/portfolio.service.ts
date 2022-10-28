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
    return this.http.get('json'); /*aca en lugar de 'json' mas adelante iria un url para comunicarse y enviar un request para devolver los datos.*/
  }

}

