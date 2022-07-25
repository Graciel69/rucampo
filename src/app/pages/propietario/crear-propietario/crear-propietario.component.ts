import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietariosService } from 'src/app/services/propietarios.service';
@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.scss'],
})
export class CrearPropietarioComponent implements OnInit {
  propietario: any;
  propietarioForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private propietarioSvc: PropietariosService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  isvalidField(field: string): string {
    const validatedField = this.propietarioForm.get(field);
    return !validatedField?.valid && validatedField?.touched
      ? 'is-invalid'
      : validatedField?.touched
      ? 'is-valid'
      : '';
  }

  onSave() {
    if (this.propietarioForm.valid) {
      let createdPropietario;
      const propietario = this.propietarioForm.value;
      this.propietarioSvc
        .createPropietario(propietario)
        .subscribe((res) => (createdPropietario = res));

      console.log(createdPropietario);
    }
  }

  private initForm(): void {
    this.propietarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      vivienda: ['algo', [Validators.required]],
    });
  }
}
