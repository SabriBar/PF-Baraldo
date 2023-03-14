import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ModificarInscripcionComponent } from './components/abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';


@NgModule({
  declarations: [
    ListaInscripcionComponent,
    AgregarInscripcionComponent,
    ModificarInscripcionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
    
  ]
})
export class InscripcionesModule { }
