'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.VideoclubType = new graphql_1.GraphQLObjectType({
    name: 'Videoclub',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        manager: { type: graphql_1.GraphQLString },
        city: { type: graphql_1.GraphQLString },
        street: { type: graphql_1.GraphQLString },
        postal_code: { type: graphql_1.GraphQLString },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
exports.VideoclubInputType = new graphql_1.GraphQLInputObjectType({
    name: 'VideoclubInput',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        manager: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        city: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        street: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        postal_code: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map