import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { AbmService } from 'src/app/inscripciones/service/abm.service';
import { editInscripcionState } from 'src/app/inscripciones/state/inscripcion-state.actions';
import { Curso } from 'src/app/shared/models/curso';
import { Inscripcion } from 'src/app/shared/models/inscripcion';
import { InscripcionState } from 'src/app/shared/models/inscripciones.state';
import { Profesor } from 'src/app/shared/models/profesor';

@Component({
  selector: 'app-modificar-inscripcion',
  templateUrl: './modificar-inscripcion.component.html',
  styleUrls: ['./modificar-inscripcion.component.css']
})
export class ModificarInscripcionComponent implements OnInit {

  form!: UntypedFormGroup;
  curso$!: Observable<Curso[]>;
  actionBtn: string = "Guardar";
  profesor$!: Observable<Profesor[]>;

  constructor(
    private abmService: AbmService,
    private profesor: ProfesorService,
    private snackBar: MatSnackBar,
    private curso: CursosService,
    private store: Store<InscripcionState>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private dialogRef: MatDialogRef<ModificarInscripcionComponent>
  ) { }

  ngOnInit(): void {
    this.profesor$ = this.profesor.obtenerProfesores();
    this.curso$ = this.curso.obtenerCursosObservable();
    this.form = new UntypedFormGroup({
      curso: new UntypedFormControl('{}', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      alumnoNombre: new UntypedFormControl('', Validators.required),
      alumnoApellido: new UntypedFormControl('', Validators.required),
      profesor: new UntypedFormControl('{}', Validators.required),
    });

    if (this.inscripcion) {
      this.actionBtn = "Guardar"
      this.form.controls['curso'].setValue(this.inscripcion.curso);
      this.form.controls['comision'].setValue(this.inscripcion.comision);
      this.form.controls['alumnoNombre'].setValue(this.inscripcion.alumnoNombre);
      this.form.controls['alumnoApellido'].setValue(this.inscripcion.alumnoApellido);
      this.form.controls['profesor'].setValue(this.inscripcion.profesor);
    }
  }

  editInscripcion() {
    let inscripcion: Inscripcion = {
      id: this.inscripcion.id,
      nro: this.inscripcion.nro,
      curso: this.form.value.curso,
      comision: this.form.value.comision,
      alumnoNombre: this.form.value.alumnoNombre,
      alumnoApellido: this.form.value.alumnoApellido,
      profesor: this.form.value.profesor
    }
    this.store.dispatch(editInscripcionState({ inscripcion: inscripcion }));
    this.form.reset();
    this.dialogRef.close('guardar');
  }


}
