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
import { StoreModule } from '@ngrx/store';
import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';
import { CursoInicioComponent } from './components/curso-inicio/curso-inicio.component';
import { EffectsModule } from '@ngrx/effects';
import { CursoEffects } from './state/curso-state.effects';

@NgModule({
  declarations: [
    CardCursoComponent,
    AgregarCursoComponent,
    ModificarCursoComponent,
    BooleanTransformPipe,
    CursoInicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CursoRoutingModule,
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursoEffects])
  ],
  exports: [
    CardCursoComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursoModule { }
