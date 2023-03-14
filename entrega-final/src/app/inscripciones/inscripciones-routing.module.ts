import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarInscripcionComponent } from './components/abm-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { ModificarInscripcionComponent } from './components/abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';
import { ListaInscripcionComponent } from './components/lista-inscripcion/lista-inscripcion.component';

const routes: Routes = [
  {
    path: '', canActivateChild: [SesionGuard], children: [
      { path: 'lista', component: ListaInscripcionComponent },
      { path: 'agregar-inscripcion', component: AgregarInscripcionComponent, canActivate: [AdminGuard] },
      { path: 'edit-inscripcion', component: ModificarInscripcionComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
