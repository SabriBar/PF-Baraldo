import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from 'src/app/authentication/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/auth.selectors';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Alumno } from 'src/app/shared/models/alumno';
import { Usuario } from 'src/app/shared/models/usuario';
import { alumnosCargados, cargarAlumnoState } from '../../alumno-state.actions';
import { AlumnoState } from '../../alumno-state.reducer';
import { AbmService } from '../../services/abm.service';
import { AlumnosService } from '../../services/alumnos.service';
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

  constructor(
    public alumnoService: AlumnosService,
    private abmService: AbmService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private store: Store<AlumnoState>,
    private authStore: Store<AuthState>
  ) { }


  ngOnInit() {
    this.cargarAlumno();
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
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
    this.store.dispatch(cargarAlumnoState());
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnoService.getAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.authStore.dispatch(alumnosCargados({ alumnos: alumnos }));
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
    this.abmService.deleteAlumno(alumno.id).subscribe((alumno: Alumno) => {
      this.snackBar.open('  Alumno eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      });
      this.cargarAlumno();
    });
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
