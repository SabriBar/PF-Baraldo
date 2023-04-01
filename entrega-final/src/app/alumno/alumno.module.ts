import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';
import { UsernamePipe } from './pipes/username.pipe';
import { AgregarAlumnoComponent } from './components/abm-alumno/agregar-alumno/agregar-alumno.component';
import { RouterModule } from '@angular/router';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { alumnoStateFeatureKey, reducer } from './state/alumno-state.reducer';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { EffectsModule } from '@ngrx/effects';
import { AlumnoEffects } from './state/alumno-state.effects';

@NgModule({
  declarations: [
    ListaAlumnoComponent,
    ModificarAlumnoComponent,
    UsernamePipe,
    AgregarAlumnoComponent,
    AlumnoInicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    AlumnoRoutingModule,
    StoreModule.forFeature(alumnoStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnoEffects])
  ],
  exports: [
    ListaAlumnoComponent
  ]
})
export class AlumnoModule { }