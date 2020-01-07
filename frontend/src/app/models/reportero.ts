import { Categoria } from './categoria';

export interface Reportero {
  _id: string;
  dni: string;
  name: string;
  apellidos: string;
  direccion: string;
  ciudad: string;
  cp: string;
  categoria: Categoria;
}
