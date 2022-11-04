import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacionList:any;
  constructor(private datosporfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerdatos().subscribe(data=>{
    this.educacionList=data.educacion;
    })
  }

}







