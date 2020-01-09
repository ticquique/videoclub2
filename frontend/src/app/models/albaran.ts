import { Reportaje } from './reportaje';
import { Editorial } from './editorial';

export interface Albaran {
  _id: string;
  reportaje: Reportaje;
  editorial: Editorial;
  cantidadRecibida: number;
  cantidadPagada: number;
  created_at: string;
}
