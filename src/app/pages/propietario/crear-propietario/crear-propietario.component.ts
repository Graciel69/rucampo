import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { HttpClient } from '@angular/common/http';
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
    private propietarioSvc: PropietariosService,
    private http: HttpClient
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
        .subscribe((res) => {
          (createdPropietario = res)
          this.router.navigate(['/propietarios']);
          console.log(createdPropietario);
        });

    }
  }

  /*onFileChanged(event:any) {
    const file = event.target.files[0]

    const uploadData = new FormData();
    uploadData.append('myFile', file, Date.now().toString()+'.jpg');
    this.http.post('https://server.rucampo.com:3000/api/files', uploadData)
      .subscribe(data=>{
        console.log(data);
      });
  }*/


  private initForm(): void {
    this.propietarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      viviendaId: ['0', [Validators.required]],
    });
  }
}
