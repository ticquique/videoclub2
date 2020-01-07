"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
class Creable {
    constructor(model) {
        this.CreableType = {
            element: {
                type: new graphql_1.GraphQLScalarType({
                    name: 'CreableScalar',
                    description: 'Creable type',
                    serialize(value) { return JSON.parse(value); },
                    parseValue(value) { return JSON.stringify(value); }
                })
            },
            populate: { type: graphql_1.GraphQLString }
        };
        this.create = async (_, params) => {
            const { element, populate } = params;
            console.log(element, populate);
            console.log(params);
            let newElement = await this.model.create(element);
            newElement = populate ? await this.model.populate(newElement, populate) : newElement;
            return newElement;
        };
        this.model = model;
    }
}
exports.Creable = Creable;
//# sourceMappingURL=creable.js.map