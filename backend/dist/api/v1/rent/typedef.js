'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typedef_1 = require("../film/typedef");
exports.RentType = new graphql_1.GraphQLObjectType({
    name: 'Rent',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        films: { type: typedef_1.FilmType },
        pickup_date: { type: graphql_1.GraphQLString },
        devolution_date: { type: graphql_1.GraphQLString },
        amount: { type: graphql_1.GraphQLInt },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map