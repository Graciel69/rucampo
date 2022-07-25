import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.scss'],
})
export class CrearInmuebleComponent implements OnInit {
  inmueble: any;
  inmuebleForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private inmuebleSvc: InmueblesService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  onSave() {
    if (this.inmuebleForm.valid) {
      const inmueble: Inmueble = this.inmuebleForm.value;

      const createdInmueble = this.inmuebleSvc.createInmueble(inmueble);
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
      propietarioId: ['', [Validators.required]],
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
