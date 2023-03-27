import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ModificarInscripcionComponent } from './components/abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';
import { StoreModule } from '@ngrx/store';
import { inscripcionStateFeatureKey, reducer } from './inscripcion-state.reducer';


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
    StoreModule.forFeature(inscripcionStateFeatureKey, reducer)
    
  ]
})
export class InscripcionesModule { }
