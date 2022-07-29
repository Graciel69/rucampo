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
      `https://server.rucampo.com:3000/api/inmuebles`,
      inmueble
    );
  }

  getInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>('https://server.rucampo.com:3000/api/inmuebles');
  }

  getInmueble(id: any) {
    return this.http.get(`https://server.rucampo.com:3000/api/inmuebles/${id}`);
  }
}
