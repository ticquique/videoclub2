'use strict';

import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType, GraphQLBoolean, GraphQLList } from 'graphql';
import { ReporteroResolver } from '../reportero/resolver';
import { ReporteroType } from '../reportero/typedef';

const reporteroResolver = new ReporteroResolver()
export const SolicitudType = new GraphQLObjectType({
    name: 'Solicitud',
    fields: {
        _id: { type: GraphQLString },
        reportero: {
            resolve: async (parent, _) => (await reporteroResolver.find(null, { page: 1, perPage: 1, resource: { _id: parent.reportero } }))?.[0] ?? null,
            type: ReporteroType
        },
        aprobada: { type: GraphQLBoolean },
        descripcion: { type: GraphQLString },
        fecha: { type: GraphQLString },
        equipoFotografico: { type: GraphQLString },
        resumenCV: { type: GraphQLString },
    }
});

export const SolicitudInputType = new GraphQLInputObjectType({
    name: 'SolicitudInput',
    fields: {
        _id: { type: GraphQLString },
        reportero: { type: GraphQLString },
        aprobada: { type: GraphQLBoolean },
        descripcion: { type: GraphQLString },
        fecha: { type: GraphQLString },
        equipoFotografico: { type: GraphQLString },
        resumenCV: { type: GraphQLString },
    }
});