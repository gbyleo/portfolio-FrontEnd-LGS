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
import { AppComponent } from '../app.component';






//definicion de nuestras rutas
const routes: Routes = [
 {path:'encabezado', component: EncabezadoComponent},
 {path:'acercaDe', component: AcercaDeComponent},
 {path:'experiencia', component: EducacionComponent},
 {path:'skills', component: SkillsComponent},
 {path:'habilidades', component: HabilidadesComponent},
 {path:'proyectos', component: ProyectosComponent},

];


@NgModule({
declarations: [],
  
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule] 
})



/* export class AppRoutingModule{} */
