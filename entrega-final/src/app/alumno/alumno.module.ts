import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';
import { UsernamePipe } from './pipes/username.pipe';
import { AgregarAlumnoComponent } from './components/abm-alumno/agregar-alumno/agregar-alumno.component';
import { RouterModule } from '@angular/router';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListaAlumnoComponent,
    ModificarAlumnoComponent,
    UsernamePipe,
    AgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AlumnoRoutingModule
  ],
  exports: [
    ListaAlumnoComponent
  ]
})
export class AlumnoModule { }