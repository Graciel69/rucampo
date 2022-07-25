import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.scss'],
})
export class CrearInmuebleComponent implements OnInit {
  propietarios: any;
  inmueble: any;
  inmuebleForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private inmuebleSvc: InmueblesService,
    private propietarioSvc: PropietariosService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.propietarioSvc
      .getPropietarios()
      .subscribe((propietario) => (this.propietarios = propietario));
  }

  onSave() {
    if (this.inmuebleForm.valid) {
      const inmueble: Inmueble = this.inmuebleForm.value;

      console.log(inmueble);

      // const createdInmueble = this.inmuebleSvc.createInmueble(inmueble);
    } else {
      console.log('Error de formulario');
    }
  }

  isvalidField(field: string): string {
    const validatedField = this.inmuebleForm.get(field);
    return !validatedField?.valid && validatedField?.touched
      ? 'is-invalid'
      : validatedField?.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.inmuebleForm = this.fb.group({
      img_url: ['algo', [Validators.required]],
      direccion: ['', [Validators.required]],
      salon: ['', [Validators.required]],
      piso: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      propietarioId: [''],
      puerta: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      inquilino: ['', [Validators.required]],
      dormitorio: ['', [Validators.required]],
      valoracion: ['', [Validators.required]],
      baño: ['', [Validators.required]],
      cocina: ['', [Validators.required]],
      terraza: ['', [Validators.required]],
      m2: ['', [Validators.required]],
    });
  }
}
