import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';
import { CursosService } from '../../services/cursos.service';
import { AbmService } from '../../services/abm.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarCursoComponent } from '../abm-curso/modificar-curso/modificar-curso.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoState } from '../../state/curso-state.reducer';
import { Store } from '@ngrx/store';
import { selectCargandoCursos, selectCursosCargados } from '../../state/curso-state.selectors';
import { Usuario } from 'src/app/shared/models/usuario';
import { AuthState } from 'src/app/authentication/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/state/auth.selectors';
import { cargarCursoState, cursosCargados, deleteCursoState } from '../../state/curso-state.actions';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesionActiva$!: Observable<Boolean>;
  cargando$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private store: Store<CursoState>,
    private authStore: Store<AuthState>
  ) { }

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoCursos);
    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }


  deleteCurso(curso: Curso) {
    this.store.dispatch(deleteCursoState({ curso }));
  }

  editDialog(curso: Curso) {
    this.dialog.open(ModificarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      this.cursos$ = this.cursosService.obtenerCursosObservable()
    });
  }
}


