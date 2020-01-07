import { Categoria } from "./categoria";

export interface Reportero {
  _id: any;
  name: string;
  categoria: Categoria;
  descripcion: string;
  equipoFotografico: string;
  resumenCV: string;
}
