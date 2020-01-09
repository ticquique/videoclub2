'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLNonNull, GraphQLInputObjectType, GraphQLInt } from 'graphql';


export const CategoriaType = new GraphQLObjectType({
    name: 'CategoriaType',
    fields: {
        _id: { type: GraphQLString },
        ppp: { type: GraphQLInt }
    }
});

export const CategoriaInputType = new GraphQLInputObjectType({
    name: 'CategoriaInputType',
    fields: {
        _id: { type: GraphQLString },
        ppp: { type: GraphQLInt }
    }
});
