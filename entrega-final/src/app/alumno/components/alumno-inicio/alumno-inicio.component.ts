import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarAlumnoState } from '../../state/alumno-state.actions';
import { AlumnoState } from '../../state/alumno-state.reducer';

@Component({
  selector: 'app-alumno-inicio',
  templateUrl: './alumno-inicio.component.html',
  styleUrls: ['./alumno-inicio.component.css']
})
export class AlumnoInicioComponent implements OnInit {

  constructor(
    private store: Store<AlumnoState>
  ){}
  
  
  ngOnInit(){
    this.store.dispatch(cargarAlumnoState());
  }

}
