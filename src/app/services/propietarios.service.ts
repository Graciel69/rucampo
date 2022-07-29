import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmueble } from '../shared/interfaces/inmueble.interface';
@Injectable({
  providedIn: 'root',
})
export class PropietariosService {
  constructor(private http: HttpClient) {}

  createPropietario(propietario: any) {
    return this.http.post<Inmueble>(
      `http://localhost:3000/api/propietarios`,
      propietario
    );
  }

  getPropietarios() {
    return this.http.get('http://localhost:3000/api/propietarios');
  }

  getPropietario(id: any) {
    return this.http.get(`http://localhost:3000/api/propietarios/${id}`);
  }

  getPropietrioOfInmueble(id: any) {
    return this.http.get(
      `http://localhost:3000/api/propietarios/propietario-inmueble/${id}`
    );
  }

  updatePropietario(id: any, body: any) {
    return this.http.put(`http://localhost:3000/api/propietarios/${id}`, body);
  }
}
