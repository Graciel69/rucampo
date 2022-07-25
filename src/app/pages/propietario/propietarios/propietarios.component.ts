import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropietariosService } from 'src/app/services/propietarios.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.scss'],
})
export class PropietariosComponent implements OnInit {
  propietarios: any;
  constructor(
    private router: Router,
    private propietarioSvc: PropietariosService
  ) {}

  ngOnInit(): void {
    this.propietarioSvc.getPropietarios().subscribe((propietarios) => {
      this.propietarios = propietarios;
    });
  }
}
