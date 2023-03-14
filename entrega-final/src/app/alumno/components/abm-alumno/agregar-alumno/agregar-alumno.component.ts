import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbmService } from 'src/app/alumno/services/abm.service';
import { CursosService } from 'src/app/curso/services/cursos.service';
import { Curso } from 'src/app/shared/models/curso';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  form: UntypedFormGroup;
  curso$!: Observable<Curso[]>;

  constructor(
    private fb: UntypedFormBuilder,
    private abmService: AbmService,
    private curso: CursosService,
    private router: Router,
    private snackBar: MatSnackBar) {
      
    let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
    this.curso$ = this.curso.obtenerCursosObservable();
    this.form = this.fb.group({
      nombre: new UntypedFormControl('', Validators.required),
      apellido: new UntypedFormControl('', Validators.required),
      curso: new UntypedFormControl('{}', Validators.required),
      comision: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.pattern(regexCorreo)])
    })

    
  }

  ngOnInit(): void {
  }

  createAlumno() {
    if(this.form.valid){
      this.abmService.createAlumno(this.form.value).subscribe({
        next:(res) =>{
          this.router.navigate(['/alumnos/lista']);
          this.snackBar.open('  Alumno creado correctamente', '', {
            duration: 1500,
            horizontalPosition: 'left',
            verticalPosition: 'bottom'
          });
        }
      })
    }
  
  }

}
