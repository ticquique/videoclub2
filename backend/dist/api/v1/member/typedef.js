'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.MemberType = new graphql_1.GraphQLObjectType({
    name: 'Member',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map