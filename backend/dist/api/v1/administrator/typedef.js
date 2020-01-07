'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.AdministratorType = new graphql_1.GraphQLObjectType({
    name: 'Administrator',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
exports.AdministratorInputType = new graphql_1.GraphQLInputObjectType({
    name: 'AdministratorInput',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        username: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map