"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const findableScalar = new graphql_1.GraphQLScalarType({
    name: 'FindableScalar',
    description: 'Findable type',
    serialize(value) { return JSON.parse(value); },
    parseValue(value) { return JSON.stringify(value); }
});
class Findable {
    constructor(model) {
        this.findableScalar = findableScalar;
        this.FindableType = {
            page: { type: graphql_1.GraphQLInt },
            perPage: { type: graphql_1.GraphQLInt },
            resource: {
                type: this.findableScalar
            },
            sort: { type: graphql_1.GraphQLString },
            populate: { type: graphql_1.GraphQLString },
            lean: { type: graphql_1.GraphQLString },
            aggregate: {
                type: this.findableScalar
            }
        };
        this.find = async (_, params) => {
            let { page = 1, perPage = 20, resource, sort, populate, lean, aggregate } = params;
            resource = aggregate ? resource ? { ...resource, $expr: aggregate } : { $expr: aggregate } : resource;
            let query = resource ? this.model.find(resource) : this.model.find({});
            query = perPage ? query.limit(perPage) : query;
            query = page && perPage ? query.skip((page - 1) * perPage) : query;
            query = sort ? query.sort(sort) : query;
            query = populate ? query.populate(populate) : query;
            query = lean ? query.lean() : query;
            const data = await query.exec();
            return data;
        };
        this.model = model;
    }
}
exports.Findable = Findable;
//# sourceMappingURL=findable.js.map