import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ModificarAlumnoComponent } from './modificar-alumno.component';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditAlumnoComponent', () => {
  let component: ModificarAlumnoComponent;
  let fixture: ComponentFixture<ModificarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAlumnoComponent ],
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validaciones correctas en todos los campos', () =>{
    const form = component.formulario
    const nombre = form.controls["nombre"];
    const apellido = form.controls["apellido"];
    const curso = form.controls["curso"];
    const comision = form.controls["comision"];
    const email = form.controls["email"];

    nombre.setValue('Cosme');
    apellido.setValue('Fulanito');
    curso.setValue('Angular');
    comision.setValue('100');
    email.setValue('cosmefula@gmail.com');

    expect(form.valid).toBeTrue();
  })
});
