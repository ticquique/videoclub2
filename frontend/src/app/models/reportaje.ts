import { Reportero } from './reportero';

export interface Reportaje {
  _id: string;
  numeroFotos: number;
  descripcion: string;
  reportero: Reportero;
}
