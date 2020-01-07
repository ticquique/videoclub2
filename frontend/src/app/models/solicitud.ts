import { Categoria } from './categoria';

export interface Solicitud {
  _id: string;
  nombre: string;
  categoria: Categoria;
  aprobada: boolean;
}
