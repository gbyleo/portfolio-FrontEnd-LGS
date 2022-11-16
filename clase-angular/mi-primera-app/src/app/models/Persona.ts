/* este ts del MVC seria "M", o sea modelo*/
export class Persona{
  nombre: string
  apellido: string
  edad:number

  constructor(nombre: string="", apellido: string="", edad:number=0){
    this.nombre= nombre
    this.apellido=apellido
    this.edad=edad
  }


cumpliranios():void {
this.edad++

}
}
