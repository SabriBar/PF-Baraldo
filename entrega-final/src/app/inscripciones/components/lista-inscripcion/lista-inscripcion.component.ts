import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from 'src/app/authentication/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/authentication/state/auth.selectors';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { Usuario } from 'src/app/shared/models/usuario';
import { InscripcionState } from '../../state/inscripcion-state.reducer';
import { AbmService } from '../../service/abm.service';
import { InscripcionService } from '../../service/inscripcion.service';
import { ModificarInscripcionComponent } from '../abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';
import { deleteInscripcionState } from '../../state/inscripcion-state.actions';

@Component({
  selector: 'app-lista-inscripcion',
  templateUrl: './lista-inscripcion.component.html',
  styleUrls: ['./lista-inscripcion.component.css']
})
export class ListaInscripcionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Inscripcion>;
  columnas: string[] = ['id', 'curso', 'comision', 'alumno', 'profesor', 'acciones'];
  suscripcion!: Subscription;
  inscripcion$!: Observable<Inscripcion[]>;
  cargando$!: Observable<Boolean>;
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;

  constructor(
    public inscripcionService: InscripcionService,
    private abmService: AbmService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private store: Store<InscripcionState>,
    private authStore: Store<AuthState>
  ) { }


  ngOnInit() {
    this.cargarInscripcion();
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

  cargarInscripcion() {
    this.dataSource = new MatTableDataSource<Inscripcion>();
    this.inscripcionService.getInscripcionesObservable().subscribe((inscripciones: Inscripcion[]) => {
      this.dataSource.data = inscripciones;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteInscripcion(inscripcion: Inscripcion) {
    this.store.dispatch(deleteInscripcionState({ inscripcion }));
  }

  editDialog(inscripcion: Inscripcion){
    this.dialog.open(ModificarInscripcionComponent, {
      width: '30%',
      data: inscripcion
    }).afterClosed().subscribe(val => {
      if(val === 'guardar'){
        this.cargarInscripcion();
      }
    });
  }

}
