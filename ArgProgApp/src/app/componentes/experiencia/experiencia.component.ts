import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencialist:any;
  constructor(private datosporfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data=>{
    this.experiencialist=data.experiencia;
  })

}

}
