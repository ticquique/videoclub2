import { Reportaje } from './reportaje';
import { Editorial } from './editorial';

export interface Albaran {
  reportaje: Reportaje;
  editorial: Editorial;
  cantidadRecibida: number;
  cantidadPagada: number;
  fecha: string;
}
