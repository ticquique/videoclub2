/*  - Código del solicitud (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { SolicitudResolver } from "./resolver";
import { IRoute } from "../../route";
import { SolicitudType, SolicitudInputType } from "./typedef";
import { Solicitud as ISolicitud } from "../../../interfaces/solicitud";
import { CreateOptions, FindOptions, QueryPopulateType } from "../../methods";

/**
 * Video routes
 *
 * @export
 * @class SolicitudRouter
 * @extends {IRoute}
 */
export class SolicitudRouter extends IRoute<SolicitudRouter> {
    resolver = new SolicitudResolver();

    solicitud: GraphQLFieldConfig<any, any, any> = {
        type: SolicitudType,
        description: 'Retrieve single solicitud by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    solicituds: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(SolicitudType),
        description: 'Find solicituds',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<ISolicitud>) => this.resolver.find(null, args)
    }

    mutations = {
        solicitud: {
            type: SolicitudType,
            description: 'Insert or update solicitud',
            args: { element: { type: GraphQLNonNull(SolicitudInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<ISolicitud>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'solicitud', privileges: 'admin' }] */
    }
}
