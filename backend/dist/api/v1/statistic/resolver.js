'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const methods_1 = require("../../methods");
class StatisticResolver extends methods_1.All {
    constructor() {
        super(models_1.Statistic);
        this.model = models_1.Statistic;
    }
}
exports.StatisticResolver = StatisticResolver;
//# sourceMappingURL=resolver.js.map