import { Document, Schema, model, Model } from 'mongoose';
import { Reportero as IReportero } from '../interfaces/reportero';
import { Categoria } from './categoria';
/* - Código de la película (autonumérico)
- Nombre (cadena, obligatorio y editable)
- Director (cadena, opcional y editable)
- Fecha de estreno (fecha, obligatorio y editable)
- Precio de alquiler (real, obligatorio y editable) */

export interface IReporteroModel extends IReportero, Document {
}

class ReporteroClass {

}

const ReporteroFields = {
    categoria: {
        type: Schema.Types.ObjectId,
        ref: Categoria,
        required: true
    },
    dni: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    cp: {
        type: String,
        required: true,
        trim: true
    },
};


const ReporteroSchema = new Schema(ReporteroFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

ReporteroSchema.loadClass(ReporteroClass);

export const Reportero: Model<IReporteroModel> = model('Reportero', ReporteroSchema);
