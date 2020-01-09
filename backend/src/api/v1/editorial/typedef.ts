'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLInt } from 'graphql';


export const EditorialType = new GraphQLObjectType({
    name: 'EditorialType',
    fields: {
        _id: { type: GraphQLString },
        cif: { type: GraphQLString },
        direccion: { type: GraphQLString },
        name: { type: GraphQLString }
    }
});

export const EditorialInputType = new GraphQLInputObjectType({
    name: 'EditorialInputType',
    fields: {
        _id: { type: GraphQLString },
        cif: { type: GraphQLString },
        direccion: { type: GraphQLString },
        name: { type: GraphQLString }
    }
});
