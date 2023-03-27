import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/shared/models/curso';
import { cargarCursoState, cursosCargados } from '../../curso-state.actions';
import { CursoState } from '../../curso-state.reducer';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {

constructor(
  private cursosService: CursosService
){}


ngOnInit(){
  
}

}
