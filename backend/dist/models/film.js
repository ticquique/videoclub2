"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class FilmClass {
}
const FilmFields = {
    videoclub_code: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Videoclub',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
    released_at: {
        type: Date,
        required: true
    },
    rent_price: {
        type: Number,
        required: true
    }
};
const FilmSchema = new mongoose_1.Schema(FilmFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
FilmSchema.loadClass(FilmClass);
exports.Film = mongoose_1.model('Film', FilmSchema);
//# sourceMappingURL=film.js.map