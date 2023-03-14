import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('Pruebas unitarias de autenticacion', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('componente creado correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Campos correctos', () =>{
    const form = component.formularioLogin;
    const usuario = form.controls["usuario"];
    const contraseña = form.controls["contraseña"];

    usuario.setValue('maxPower');
    contraseña.setValue('maxpower5690');

    expect(usuario.valid).toBeTrue();
    expect(contraseña.valid).toBeTrue();
  })
});
