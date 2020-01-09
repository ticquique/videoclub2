/*  - Código del reportaje (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { ReportajeType, ReportajeInputType } from "./typedef";
import { ReportajeResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { Reportaje as IReportaje } from "../../../interfaces/reportaje";
/**
 * Video routes
 *
 * @export
 * @class ReportajeRouter
 * @extends {IRoute}
 */
export class ReportajeRouter extends IRoute<ReportajeRouter> {

    resolver = new ReportajeResolver();

    reportaje: GraphQLFieldConfig<any, any, any> = {
        type: ReportajeType,
        description: 'Retrieve single reportaje by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    reportajes: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(ReportajeType),
        description: 'Find reportajes',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IReportaje>) => this.resolver.find(null, args)
    }

    mutations = {
        reportaje: {
            type: ReportajeType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(ReportajeInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IReportaje>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'reportaje', privileges: 'admin' }] */
    }
}
