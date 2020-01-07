"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rent_1 = require("./rent");
class StatisticClass {
}
const StatisticFields = {
    administrator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Administrator',
        required: true,
    },
    member: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    rents: {
        type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Rent' }],
        default: []
    },
    amount: {
        type: Number,
        default: 0
    }
};
const StatisticSchema = new mongoose_1.Schema(StatisticFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
StatisticSchema.pre('save', async function (next) {
    const self = this;
    try {
        const rents = await rent_1.Rent.find({ '_id': { $in: self.rents } });
        self.amount = rents.reduce((old, current) => old + current.amount, 0);
        next();
    }
    catch (e) {
        next(e);
    }
});
StatisticSchema.loadClass(StatisticClass);
exports.Statistic = mongoose_1.model('Statistic', StatisticSchema);
//# sourceMappingURL=statistic.js.map