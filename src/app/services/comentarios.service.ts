import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  createComentario(comentario: any) {
    return this.http.post(`http://localhost:3000/api/comentarios`, comentario);
  }

  getComentarios(idInmueble: any) {
    return this.http.get(`http://localhost:3000/api/comentarios/${idInmueble}`);
  }
}
