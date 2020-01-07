import { Categoria } from './categoria';

export interface Reportero {
  _id: string;
  name: string;
  categoria: Categoria;
}
