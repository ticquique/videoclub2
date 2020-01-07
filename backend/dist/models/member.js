"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MemberClass {
}
const MemberFields = {
    name: {
        type: String,
        index: true,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
};
const MemberSchema = new mongoose_1.Schema(MemberFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
MemberSchema.loadClass(MemberClass);
exports.Member = mongoose_1.model('Member', MemberSchema);
//# sourceMappingURL=member.js.map