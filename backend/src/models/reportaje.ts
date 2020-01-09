export interface Reportaje {
    _id: string;
    numeroFotos: number;
    descripcion: string;
}

import { Document, Schema, model, Model } from 'mongoose';
import { Reportaje as IReportaje } from '../interfaces/reportaje';
import { Reportero } from './reportero';

/* - Código del administrador (autonumérico)
   - Nombre (cadena, obligatorio y editable) */

export interface IReportajeModel extends IReportaje, Document {
}

class ReportajeClass {

}

const ReportajeFields = {
    numeroFotos: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    reportero: {
        type: Schema.Types.ObjectId,
        ref: Reportero,
        required: true
    }
};

const ReportajeSchema = new Schema(ReportajeFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

ReportajeSchema.loadClass(ReportajeClass);

export const Reportaje: Model<IReportajeModel> = model('Reportaje', ReportajeSchema);
