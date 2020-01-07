"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const argon2 = require("argon2");
class UserClass {
    async comparePassword(password) {
        const self = this;
        return await argon2.verify(password, self.password);
    }
}
const UserFields = {
    username: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 80,
        select: false,
    },
    privileges: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
};
const UserSchema = new mongoose_1.Schema(UserFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
UserSchema.pre('save', async function (next) {
    const self = this;
    if (this.isModified('password')) {
        try {
            const hash = await argon2.hash(self.password);
            self.password = hash;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    else
        next();
});
UserSchema.loadClass(UserClass);
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=user.js.map