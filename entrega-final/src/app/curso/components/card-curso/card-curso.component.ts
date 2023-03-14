import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';
import { CursosService } from '../../services/cursos.service';
import { AbmService } from '../../services/abm.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/shared/models/sesion';
import { MatDialog } from '@angular/material/dialog';
import { ModificarCursoComponent } from '../abm-curso/modificar-curso/modificar-curso.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    private cursosService: CursosService,
    private abmService: AbmService,
    private sesion: SesionService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cursos$ = this.cursosService.obtenerCursosObservable();
    this.sesion$ = this.sesion.obtenerSesion();
  }


  deleteCurso(curso: Curso){
    this.abmService.deleteCurso(curso).subscribe((curso: Curso) => {
      this.snackBar.open('  Curso eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      });
      this.cursos$ = this.cursosService.obtenerCursosObservable();
    });
  }

  editDialog(curso: Curso){
    this.dialog.open(ModificarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      this.cursos$ = this.cursosService.obtenerCursosObservable()
    });
  }
}


