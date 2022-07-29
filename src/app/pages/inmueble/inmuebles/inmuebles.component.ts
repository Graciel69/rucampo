import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';

import { PropietariosService } from 'src/app/services/propietarios.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
})
export class InmueblesComponent implements OnInit {
  inmuebles!: Inmueble[];

  constructor(
    private router: Router,

    private inmuebleSvc: InmueblesService,
    private propietarioSvc: PropietariosService
  ) {
    this.inmuebleSvc.getInmuebles().subscribe((inmueble) => {
      inmueble.forEach((value, i) => {
        const id = value.id;

        this.propietarioSvc
          .getPropietrioOfInmueble(id)
          .subscribe((res: any) => (value.propietario = res));
      });

      this.inmuebles = inmueble;
    });
  }

  ngOnInit() {}

  onSave(form: any, inmuebleId: any) {
    let model = {
      inmuebleId: inmuebleId,
      vender: form.vender,
      comentario: form.comentario,
    };

    console.log(model);
  }
}
