"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VideoclubClass {
}
const VideoclubFields = {
    manager: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
};
const VideoclubSchema = new mongoose_1.Schema(VideoclubFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
VideoclubSchema.loadClass(VideoclubClass);
exports.Videoclub = mongoose_1.model('Videoclub', VideoclubSchema);
//# sourceMappingURL=videoclub.js.map