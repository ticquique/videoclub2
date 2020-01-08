import { Document, Schema, model, Model } from 'mongoose';
import { Solicitud as ISolicitud } from '../interfaces/solicitud';
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
        type: String,
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


SolicitudSchema.pre('save', async function (this: Document & ISolicitud, next) {
    try {
        const date = new Date(this.fecha);
        const dateAgo = new Date(date.setMonth(date.getMonth() - 1));
        const existMember = await Solicitud.exists({ fecha: { "$gte": dateAgo } });
        if (existMember) throw (new Error('Debe esperar al menos un mes entre solicitudes'));
        this.fecha = date;
        next();
    } catch (e) { next(e); }
});


SolicitudSchema.loadClass(SolicitudClass);

export const Solicitud: Model<ISolicitudModel> = model('Solicitud', SolicitudSchema);
