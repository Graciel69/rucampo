import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PropietariosService } from 'src/app/services/propietarios.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.scss'],
})
export class PropietariosComponent implements OnInit {
  propietarios: any = [];
  constructor(
    private router: Router,
    private propietarioSvc: PropietariosService,
    private inmueblesSvc: InmueblesService
  ) {}

  ngOnInit(): void {
    this.propietarioSvc.getPropietarios().subscribe((propietarios: any) => {
      const a = propietarios;

      a.forEach((value: any, index: any) => {
        const id = value.inmuebleId;
        if (id == '0') {
          value.vivienda = [{ direccion: 'no inmueble' }];
          return value;
        } else {
          this.inmueblesSvc.getInmueble(id).subscribe((res) => {
            value.vivienda = res;
          });

          return value;
        }
      });

      console.log(a);

      this.propietarios = a;
    });
  }
}
