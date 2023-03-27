import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';
import { CursosService } from '../../services/cursos.service';
import { AbmService } from '../../services/abm.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarCursoComponent } from '../abm-curso/modificar-curso/modificar-curso.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoState } from '../../curso-state.reducer';
import { Store } from '@ngrx/store';
import { selectCargandoCursos, selectCursosCargados } from '../../curso-state.selectors';
import { Usuario } from 'src/app/shared/models/usuario';
import { AuthState } from 'src/app/authentication/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/auth.selectors';
import { cargarCursoState, cursosCargados } from '../../curso-state.actions';

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
    private abmService: AbmService,
    private sesion: SesionService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private store: Store<CursoState>,
    private authStore: Store<AuthState>
  ) { }

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoCursos);

    this.store.dispatch(cargarCursoState());

    this.cursosService.obtenerCursosObservable().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({ cursos: cursos }));
    });
    
    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }


  deleteCurso(curso: Curso) {
    this.abmService.deleteCurso(curso).subscribe((curso: Curso) => {
      this.snackBar.open('  Curso eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      });
      this.cursos$ = this.cursosService.obtenerCursosObservable();
    });
  }

  editDialog(curso: Curso) {
    this.dialog.open(ModificarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      this.cursos$ = this.cursosService.obtenerCursosObservable()
    });
  }
}


