import { Document, Schema, model, Model } from 'mongoose';
import { Editorial as IEditorial } from '../interfaces/editorial';

/* - Código del administrador (autonumérico)
   - Nombre (cadena, obligatorio y editable) */

export interface IEditorialModel extends IEditorial, Document {
}

class EditorialClass {

}

const EditorialFields = {
    name: {
        type: String,
        required: true,
        trim: true
    },
    cif: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    }
};

const EditorialSchema = new Schema(EditorialFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

EditorialSchema.loadClass(EditorialClass);

export const Editorial: Model<IEditorialModel> = model('Editorial', EditorialSchema);
