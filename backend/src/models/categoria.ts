import { Document, Schema, model, Model } from 'mongoose';
import { Categoria as Icategoria } from '../interfaces/categoria';

/* - Código del administrador (autonumérico)
   - Nombre (cadena, obligatorio y editable) */

export interface ICategoriaModel extends Icategoria, Document {
}

class CategoriaClass {

}

const CategoriaFields = {
    ppp: {
        type: Number,
        required: true
    }
};

const CategoriaSchema = new Schema(CategoriaFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

CategoriaSchema.loadClass(CategoriaClass);

export const Categoria: Model<ICategoriaModel> = model('Categoria', CategoriaSchema);
