'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const methods_1 = require("../../methods");
class MemberResolver extends methods_1.All {
    constructor() {
        super(models_1.Member);
        this.model = models_1.Member;
    }
}
exports.MemberResolver = MemberResolver;
//# sourceMappingURL=resolver.js.map