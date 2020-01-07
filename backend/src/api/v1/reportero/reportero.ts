/*  - Código del reportero (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { ReporteroType, ReporteroInputType } from "./typedef";
import { ReporteroResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { Reportero as IReportero } from "../../../interfaces/reportero";
/**
 * Video routes
 *
 * @export
 * @class ReporteroRouter
 * @extends {IRoute}
 */
export class ReporteroRouter extends IRoute<ReporteroRouter> {

    resolver = new ReporteroResolver();

    reportero: GraphQLFieldConfig<any, any, any> = {
        type: ReporteroType,
        description: 'Retrieve single reportero by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    reporteros: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(ReporteroType),
        description: 'Find reporteros',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IReportero>) => this.resolver.find(null, args)
    }

    mutations = {
        reportero: {
            type: ReporteroType,
            description: 'Insert or update reportero',
            args: { element: { type: GraphQLNonNull(ReporteroInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IReportero>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'reporteros', privileges: 'admin' }]; */
    }
}
