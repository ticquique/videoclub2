"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class AdministratorClass {
}
const AdministratorFields = {
    username: {
        type: String,
        required: true
    }
};
const AdministratorSchema = new mongoose_1.Schema(AdministratorFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
AdministratorSchema.loadClass(AdministratorClass);
exports.Administrator = mongoose_1.model('Administrator', AdministratorSchema);
//# sourceMappingURL=administrator.js.map