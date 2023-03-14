import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {
    path: 'cursos',
    loadChildren: () => import('./curso/curso.module').then((modulo) => modulo.CursoModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumno/alumno.module').then((modulo) => modulo.AlumnoModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((modulo) => modulo.InscripcionesModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then((modulo) => modulo.AuthenticationModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
