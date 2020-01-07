'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typedef_1 = require("../videoclub/typedef");
const resolver_1 = require("../videoclub/resolver");
const videoclubResolver = new resolver_1.VideoclubResolver();
exports.FilmType = new graphql_1.GraphQLObjectType({
    name: 'Film',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        videoclub_code: { type: graphql_1.GraphQLString },
        videoclub: {
            type: typedef_1.VideoclubType,
            resolve: async (parent, _) => await videoclubResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.videoclub_code } })
        },
        name: { type: graphql_1.GraphQLString },
        director: { type: graphql_1.GraphQLString },
        released_at: { type: graphql_1.GraphQLString },
        rent_price: { type: graphql_1.GraphQLInt },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
exports.FilmInputType = new graphql_1.GraphQLInputObjectType({
    name: 'FilmInput',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        videoclub_code: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        director: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        released_at: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        rent_price: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map