import { Reportero } from './reportero';

export interface Solicitud {
  _id: any;
  reportero: Reportero;
  aprobada: boolean;
  descripcion: string;
  fecha: string;
  equipoFotografico: string;
  resumenCV: string;
}
