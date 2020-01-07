'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const methods_1 = require("../../methods");
class FilmResolver extends methods_1.All {
    constructor() {
        super(models_1.Film);
        this.model = models_1.Film;
    }
}
exports.FilmResolver = FilmResolver;
//# sourceMappingURL=resolver.js.map