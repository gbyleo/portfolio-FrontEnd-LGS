import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



//importamos nuestros componentes//

import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from '../componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from '../componentes/experiencia/experiencia.component';
import { EducacionComponent } from '../componentes/educacion/educacion.component';
import { SkillsComponent } from '../componentes/skills/skills.component';
import { HabilidadesComponent } from '../componentes/habilidades/habilidades.component';
import { ProyectosComponent } from '../componentes/proyectos/proyectos.component';






//definicion de nuestras rutas
const routes: Routes = [
 {path:'encabezado', component: EncabezadoComponent},
 {path:'AcercaDe', component: AcercaDeComponent},
 {path:'Experiencia', component: EducacionComponent},
 {path:'Skills', component: SkillsComponent},
 {path:'Habilidades', component: HabilidadesComponent},
 {path:'Proyectos', component: ProyectosComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
