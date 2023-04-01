import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { AbmService } from 'src/app/curso/services/abm.service';
import { editCursoState } from 'src/app/curso/state/curso-state.actions';
import { CursoState } from 'src/app/curso/state/curso-state.reducer';
import { Curso } from 'src/app/shared/models/curso';
import { Profesor } from 'src/app/shared/models/profesor';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {
  form!: UntypedFormGroup;
  inscripcion: any[] = ['Abierta', 'Cerrada'];
  profesor$!: Observable<Profesor[]>;
  actionBtn: string = "Guardar";

  constructor(
    private abmService: AbmService,
    private profesor: ProfesorService,
    private snackBar: MatSnackBar,
    private store: Store<CursoState>,
    private dialogRef: MatDialogRef<ModificarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso,
  ) { }

  ngOnInit(): void {
    this.profesor$ = this.profesor.obtenerProfesores();

    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl('', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      profesor: new UntypedFormControl('{}', Validators.required),
      inscripcionAbierta: new UntypedFormControl('', Validators.required),
    })

    if (this.curso) {
      this.actionBtn = "Guardar"
      this.form.controls['nombre'].setValue(this.curso.nombre);
      this.form.controls['comision'].setValue(this.curso.comision);
      this.form.controls['profesor'].setValue(this.curso.profesor);
      this.form.controls['inscripcionAbierta'].setValue(this.curso.inscripcionAbierta);
    }

  }


  editCurso() {
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.form.value.nombre,
      comision: this.form.value.comision,
      profesor: this.form.value.profesor,
      inscripcionAbierta: this.form.value.inscripcionAbierta,
    };
    this.store.dispatch(editCursoState({ curso: curso }));
    this.form.reset();
    this.dialogRef.close('guardar');
  }
}
