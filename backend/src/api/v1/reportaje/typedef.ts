'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType, GraphQLInt } from 'graphql';
import { ReporteroType } from '../reportero/typedef';
import { ReporteroResolver } from '../reportero/resolver';

const reporteroResolver = new ReporteroResolver()

export const ReportajeType = new GraphQLObjectType({
    name: 'ReportajeType',
    fields: {
        _id: { type: GraphQLString },
        numeroFotos: { type: GraphQLInt },
        descripcion: { type: GraphQLString },
        reportero: {
            resolve: async (parent, _) => (await reporteroResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.reportero } }))?.[0] ?? null,
            type: ReporteroType
        },
    }
});

export const ReportajeInputType = new GraphQLInputObjectType({
    name: 'ReportajeInputType',
    fields: {
        _id: { type: GraphQLString },
        numeroFotos: { type: GraphQLInt },
        descripcion: { type: GraphQLString },
        reportero: { type: GraphQLString }
    }
});
