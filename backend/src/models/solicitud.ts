import { Document, Schema, model, Model } from 'mongoose';
import { Solicitud as ISolicitud } from '../interfaces/solicitud';
import { Categoria } from './categoria';
import { Reportero } from './reportero';

/* - Código del socio (autonumérico)
- Nombre (cadena, obligatorio y editable)
- Edad (entero, obligatorio y editable) */

export interface ISolicitudModel extends ISolicitud, Document {
}

class SolicitudClass {

}

const SolicitudFields = {
    reportero: {
        type: Schema.Types.ObjectId,
        ref: Reportero,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    aprobada: {
        type: Boolean,
        default: false,
    },
    fecha: {
        type: Date,
        required: true,
    },
    equipoFotografico: {
        type: String,
        required: true,
    },
    resumenCV: {
        type: String,
        required: true,
    }
};

const SolicitudSchema = new Schema(SolicitudFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

SolicitudSchema.loadClass(SolicitudClass);

export const Solicitud: Model<ISolicitudModel> = model('Solicitud', SolicitudSchema);
