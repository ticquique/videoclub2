'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const methods_1 = require("../../methods");
class AdministratorResolver extends methods_1.All {
    constructor() {
        super(models_1.Administrator);
        this.model = models_1.Administrator;
    }
}
exports.AdministratorResolver = AdministratorResolver;
//# sourceMappingURL=resolver.js.map