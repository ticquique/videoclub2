"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
class Countable {
    constructor(model) {
        this.CountableType = {
            element: {
                type: new graphql_1.GraphQLScalarType({
                    name: 'CountableScalar',
                    description: 'Countable type',
                    serialize(value) { return JSON.parse(value); },
                    parseValue(value) { return JSON.stringify(value); }
                })
            },
        };
        this.count = async (_, resource) => {
            let query = resource ? this.model.countDocuments(resource) : this.model.countDocuments({});
            return await query.exec();
        };
        this.model = model;
    }
}
exports.Countable = Countable;
//# sourceMappingURL=countable.js.map