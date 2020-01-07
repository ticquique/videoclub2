'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { CategoriaType } from '../categoria/typedef';

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
        categoria: { type: GraphQLString }
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