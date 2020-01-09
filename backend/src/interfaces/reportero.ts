import { Categoria } from "./categoria";

export interface Reportero {
  _id: any;
  dni: string;
  name: string;
  apellidos: string;
  direccion: string;
  ciudad: string;
  cp: string;
  categoria: Categoria;
  _oldcat?: Categoria;
}
