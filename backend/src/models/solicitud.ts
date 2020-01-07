import { Document, Schema, model, Model } from 'mongoose';
import { Solicitud as ISolicitud } from '../interfaces/solicitud';
import { Categoria } from './categoria';

/* - Código del socio (autonumérico)
- Nombre (cadena, obligatorio y editable)
- Edad (entero, obligatorio y editable) */

export interface ISolicitudModel extends ISolicitud, Document {
}

class SolicitudClass {

}

const SolicitudFields = {
    nombre: {
        type: String,
        index: true,
        required: true,
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: Categoria,
        required: true
    }
};

const SolicitudSchema = new Schema(SolicitudFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

SolicitudSchema.loadClass(SolicitudClass);

export const Solicitud: Model<ISolicitudModel> = model('Solicitud', SolicitudSchema);
