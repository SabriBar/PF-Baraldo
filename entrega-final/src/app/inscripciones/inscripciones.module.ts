import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ModificarInscripcionComponent } from './components/abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';
import { StoreModule } from '@ngrx/store';
import { inscripcionStateFeatureKey, reducer } from './state/inscripcion-state.reducer';
import { InscripcionInicioComponent } from './components/inscripcion-inicio/inscripcion-inicio.component';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionEffects } from './state/inscripcion-state.effects';


@NgModule({
  declarations: [
    ListaInscripcionComponent,
    AgregarInscripcionComponent,
    ModificarInscripcionComponent,
    InscripcionInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionStateFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionEffects])
    
  ]
})
export class InscripcionesModule { }
