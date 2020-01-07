'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const methods_1 = require("../../methods");
class RentResolver extends methods_1.All {
    constructor() {
        super(models_1.Rent);
        this.model = models_1.Rent;
    }
}
exports.RentResolver = RentResolver;
//# sourceMappingURL=resolver.js.map