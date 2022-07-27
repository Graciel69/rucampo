import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';
import { HttpClient } from '@angular/common/http';
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
    private propietarioSvc: PropietariosService,
    private http: HttpClient
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

      const createdInmueble = this.inmuebleSvc.createInmueble(inmueble).subscribe(data=>{
        this.router.navigate(['/inmuebles']);
      });
    } else {
      console.log('Error de formulario');
    }
  }

  onFileChanged(event:any) {
    const file = event.target.files[0]

    const uploadData = new FormData();
    uploadData.append('myFile', file, Date.now().toString()+'.jpg');
    this.http.post('https://server.rucampo.com:3000/api/files', uploadData)
      .subscribe((data:any)=>{
        console.log(data.file);

        this.inmuebleForm.patchValue({
          img_url: 'https://server.rucampo.com/images/'+data.file
        })
      });
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
      img_url: ['', [Validators.required]],
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
