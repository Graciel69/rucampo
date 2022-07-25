import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmueble } from '../shared/interfaces/inmueble.interface';
@Injectable({
  providedIn: 'root',
})
export class InmueblesService {
  constructor(private http: HttpClient) {}

  createInmueble(inmueble: Inmueble) {
    return this.http.post<Inmueble>(
      `http://localhost:3000/api/inmuebles`,
      inmueble
    );
  }

  getInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>('http://localhost:3000/api/inmuebles');
  }
}
