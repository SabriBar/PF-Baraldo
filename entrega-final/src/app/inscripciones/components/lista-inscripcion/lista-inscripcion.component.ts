import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { Sesion } from 'src/app/shared/models/sesion';
import { AbmService } from '../../service/abm.service';
import { InscripcionService } from '../../service/inscripcion.service';
import { ModificarInscripcionComponent } from '../abm-inscripcion/modificar-inscripcion/modificar-inscripcion.component';

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
  sesion$!: Observable<Sesion>

  constructor(
    public inscripcionService: InscripcionService,
    private abmService: AbmService,
    private snackBar: MatSnackBar,
    private sesion: SesionService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.cargarInscripcion();
    this.sesion$ = this.sesion.obtenerSesion();
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
    this.abmService.deleteInscripcion(inscripcion.id).subscribe((inscripcion: Inscripcion) => {
      this.snackBar.open('  Inscripcion eliminada correctamente', '', {
        duration: 1500,
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      });
      this.cargarInscripcion();
    });
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
