import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { Inmueble } from 'src/app/shared/interfaces/inmueble.interface';
import { tap } from 'rxjs/operators';
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
      this.inmuebles = inmueble;
    });
  }

  ngOnInit() {}
}
