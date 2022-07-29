export interface Inmueble {
  id: number;
  img_url: string;
  direccion: string;
  salon: string;
  piso: string;
  numero: number;
  propietarioId: string;
  puerta: string;
  telefono: number;
  inquilino: string;
  dormitorio: number;
  valoracion: string;
  baño: number;
  propietario?: [
    {
      nombre: string;
      apellido: string;
      telefono: number;
      inmuebleId: string;
    }
  ];
  cocina: string;
  terraza: number;
  m2: string;
}
