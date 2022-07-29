import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';
import { InmueblesService } from 'src/app/services/inmuebles.service';
=======
>>>>>>> c06a2d9b6af0d3bc9fa8cc466479d6cd36162ff7
@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.scss'],
})
export class CrearPropietarioComponent implements OnInit {
  propietario: any;
  inmuebles!: Inmueble[];
  propietarioForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private propietarioSvc: PropietariosService,
<<<<<<< HEAD
    private http: HttpClient,
    private inmuebleSvc: InmueblesService
=======
    private http: HttpClient
>>>>>>> c06a2d9b6af0d3bc9fa8cc466479d6cd36162ff7
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.inmuebleSvc
      .getInmuebles()
      .subscribe((res: Inmueble[]) => (this.inmuebles = res));
  }

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
<<<<<<< HEAD
      this.propietarioSvc.createPropietario(propietario).subscribe((res) => {
        createdPropietario = res;
        this.router.navigate(['/propietarios']);
        console.log(createdPropietario);
      });
=======
      this.propietarioSvc
        .createPropietario(propietario)
        .subscribe((res) => {
          (createdPropietario = res)
          this.router.navigate(['/propietarios']);
          console.log(createdPropietario);
        });

>>>>>>> c06a2d9b6af0d3bc9fa8cc466479d6cd36162ff7
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
<<<<<<< HEAD
=======


>>>>>>> c06a2d9b6af0d3bc9fa8cc466479d6cd36162ff7
  private initForm(): void {
    this.propietarioForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      inmuebleId: [''],
    });
  }
}
