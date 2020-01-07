'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { CategoriaType } from '../categoria/typedef';

export const ReporteroType = new GraphQLObjectType({
    name: 'Reportero',
    fields: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        categoria: { type: CategoriaType },
        descripcion: { type: GraphQLString },
        equipoFotografico: { type: GraphQLString },
        resumenCV: { type: GraphQLString }
    }
});

export const ReporteroInputType = new GraphQLInputObjectType({
    name: 'ReporteroInput',
    fields: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        categoria: { type: GraphQLString },
        descripcion: { type: GraphQLString },
        equipoFotografico: { type: GraphQLString },
        resumenCV: { type: GraphQLString }
    }
})