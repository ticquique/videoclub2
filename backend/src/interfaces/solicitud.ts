import { Categoria } from './categoria';

export interface Solicitud {
  _id: any;
  nombre: string;
  categoria: Categoria;
  aprobada: boolean;
}
