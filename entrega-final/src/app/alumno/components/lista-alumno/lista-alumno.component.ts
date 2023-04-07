import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from 'src/app/authentication/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/state/auth.selectors';
import { Alumno } from 'src/app/shared/models/alumno';
import { Usuario } from 'src/app/shared/models/usuario';
import { AlumnosService } from '../../services/alumnos.service';
import { cargarAlumnoState, deleteAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';
import { selectAlumnosCargados, selectCargandoAlumnos } from '../../state/alumno-state.selectors';
import { ModificarAlumnoComponent } from '../abm-alumno/modificar-alumno/modificar-alumno.component';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['usuario', 'curso', 'comision', 'email', 'acciones'];
  suscripcion!: Subscription;
  alumnos$!: Observable<Alumno[]>;
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;
  sort!: MatSort;

  constructor(
    public alumnoService: AlumnosService,
    private dialog: MatDialog,
    private store: Store<AlumnoState>,
    private authStore: Store<AuthState>
  ) { }


  ngOnInit() {
    this.cargarAlumno();
    this.alumnos$ = this.store.select(selectAlumnosCargados);
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);

    this.store.dispatch(cargarAlumnoState());
    this.store.pipe(select(selectAlumnosCargados)).subscribe(alumnos => {
      this.dataSource = new MatTableDataSource(alumnos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy(): void {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarAlumno() {
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnoService.getAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteAlumno(alumno: Alumno) {
    this.store.dispatch(deleteAlumnoState({ alumno }));
  }

  editDialog(alumno: Alumno){
    this.dialog.open(ModificarAlumnoComponent, {
      width:'30%',
      data: alumno
    }).afterClosed().subscribe(val => {
      if(val === 'guardar'){
      this.cargarAlumno();
    }
    });
  }
}
