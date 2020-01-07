"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const film_1 = require("./film");
/* - Código del alquiler (autonumérico)
- Fecha de recogida (fecha, obligatorio y no editable)
- Fecha de devolución (fecha, obligatorio y editable)
- Total a pagar (real, obligatorio y derivado) */
class RentClass {
}
const RentFields = {
    films: {
        type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Film' }],
        default: []
    },
    member: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    pickup_date: {
        type: Date,
        required: true
    },
    devolution_date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    }
};
const RentSchema = new mongoose_1.Schema(RentFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
RentSchema.pre('save', async function (next) {
    const self = this;
    try {
        const films = await film_1.Film.find({ '_id': { $in: self.films } });
        self.amount = films.reduce((old, current) => old + current.rent_price, 0);
        next();
    }
    catch (e) {
        next(e);
    }
});
RentSchema.loadClass(RentClass);
exports.Rent = mongoose_1.model('Rent', RentSchema);
//# sourceMappingURL=rent.js.map