import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarCursoState, cursosCargados } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {

constructor(
  private store: Store<CursoState>
){}


ngOnInit(){
  this.store.dispatch(cargarCursoState());
}

}
