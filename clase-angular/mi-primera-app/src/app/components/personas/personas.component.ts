import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit {

  /*atributos*/
  personas: Persona[ ]=[ ]


  /*constructor*/
  constructor() { }


  /*comportamiento o metodos de la clase*/
/*ngOnInit al iniciarse este componente significa:*/
  ngOnInit(): void {

    let persona1= new Persona("Hernan","Borre",30)
    let persona2= new Persona("4a", "fsd", 22)
    this.personas.push(persona1)
    this.personas.push(persona2)
    this.personas.push(new Persona("Lala", "Lalala",25))
    this.personas.push(new Persona("Pocho", "Pantera",55))


  }

}
