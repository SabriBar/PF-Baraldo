import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarCursoComponent } from './components/abm-curso/agregar-curso/agregar-curso.component';
import { ModificarCursoComponent } from './components/abm-curso/modificar-curso/modificar-curso.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';

const routes: Routes = [
  {
    path: '', canActivateChild: [SesionGuard], children: [
      { path: 'lista', component: CardCursoComponent },
      { path: 'agregar', component: AgregarCursoComponent, canActivate: [AdminGuard] },
      { path: 'editar', component: ModificarCursoComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
