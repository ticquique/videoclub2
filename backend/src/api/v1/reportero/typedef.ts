'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { CategoriaType } from '../categoria/typedef';
import { CategoriaResolver } from '../categoria/resolver';

const categoriaResolver = new CategoriaResolver();

export const ReporteroType = new GraphQLObjectType({
    name: 'Reportero',
    fields: {
        _id: { type: GraphQLString },
        dni: { type: GraphQLString },
        name: { type: GraphQLString },
        apellidos: { type: GraphQLString },
        direccion: { type: GraphQLString },
        ciudad: { type: GraphQLString },
        cp: { type: GraphQLString },
        categoria: {
            resolve: async (parent, _) => (await categoriaResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.categoria } }))?.[0] ?? null,
            type: CategoriaType
        },
    }
});

export const ReporteroInputType = new GraphQLInputObjectType({
    name: 'ReporteroInput',
    fields: {
        _id: { type: GraphQLString },
        dni: { type: GraphQLString },
        name: { type: GraphQLString },
        apellidos: { type: GraphQLString },
        direccion: { type: GraphQLString },
        ciudad: { type: GraphQLString },
        cp: { type: GraphQLString },
        categoria: { type: GraphQLString }
    }
})