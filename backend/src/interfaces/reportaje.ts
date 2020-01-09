import { Reportero } from "./reportero";

export interface Reportaje {
  _id: any;
  numeroFotos?: number;
  descripcion?: string;
  reportero?: Reportero;
}
