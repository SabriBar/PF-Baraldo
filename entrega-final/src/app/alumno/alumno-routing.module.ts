import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarAlumnoComponent } from './components/abm-alumno/agregar-alumno/agregar-alumno.component';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';

const routes: Routes = [
  {
    path: '', canActivateChild: [SesionGuard], children: [
      { path: 'lista', component: ListaAlumnoComponent },
      { path: 'agregar-alumno', component: AgregarAlumnoComponent, canActivate: [AdminGuard] },
      { path: 'editar-alumno', component: ModificarAlumnoComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AlumnoRoutingModule { }
