import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarInscripcionState } from '../../state/inscripcion-state.actions';
import { InscripcionState } from '../../state/inscripcion-state.reducer';

@Component({
  selector: 'app-inscripcion-inicio',
  templateUrl: './inscripcion-inicio.component.html',
  styleUrls: ['./inscripcion-inicio.component.css']
})
export class InscripcionInicioComponent implements OnInit {

  constructor(
    private store: Store<InscripcionState>
  ){}
  
  
  ngOnInit(){
    this.store.dispatch(cargarInscripcionState());
  }

}
