/*  - Código del editorial (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { EditorialType, EditorialInputType } from "./typedef";
import { EditorialResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { Editorial as IEditorial } from "../../../interfaces/editorial";
/**
 * Video routes
 *
 * @export
 * @class EditorialRouter
 * @extends {IRoute}
 */
export class EditorialRouter extends IRoute<EditorialRouter> {

    resolver = new EditorialResolver();

    editorial: GraphQLFieldConfig<any, any, any> = {
        type: EditorialType,
        description: 'Retrieve single editorial by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    editorials: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(EditorialType),
        description: 'Find editorials',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<IEditorial>) => this.resolver.find(null, args)
    }

    mutations = {
        editorial: {
            type: EditorialType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(EditorialInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<IEditorial>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'editorial', privileges: 'admin' }] */
    }
}
