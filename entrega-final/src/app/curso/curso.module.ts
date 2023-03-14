import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { CursoRoutingModule } from './curso-routing.module';
import { RouterModule } from '@angular/router';
import { AgregarCursoComponent } from './components/abm-curso/agregar-curso/agregar-curso.component';
import { ModificarCursoComponent } from './components/abm-curso/modificar-curso/modificar-curso.component';
import { BooleanTransformPipe } from './pipes/boolean-transform.pipe';
import { SharedModule } from '../shared/shared.module';
import { CursosService } from './services/cursos.service';



@NgModule({
  declarations: [
    CardCursoComponent,
    AgregarCursoComponent,
    ModificarCursoComponent,
    BooleanTransformPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CursoRoutingModule
  ],
  exports: [
    CardCursoComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursoModule { }
