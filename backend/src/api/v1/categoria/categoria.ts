/*  - Código del categoria (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */

'use strict';

import { GraphQLList, GraphQLString, GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { CategoriaType, CategoriaInputType } from "./typedef";
import { CategoriaResolver } from "./resolver";
import { IRoute } from "../../route";
import { FindOptions, CreateOptions, QueryPopulateType } from "../../methods";
import { Categoria as ICategoria } from "../../../interfaces/categoria";
/**
 * Video routes
 *
 * @export
 * @class CategoriaRouter
 * @extends {IRoute}
 */
export class CategoriaRouter extends IRoute<CategoriaRouter> {

    resolver = new CategoriaResolver();

    categoria: GraphQLFieldConfig<any, any, any> = {
        type: CategoriaType,
        description: 'Retrieve single categoria by id',
        args: { id: { type: GraphQLNonNull(GraphQLString) } },
        resolve: async (_, {id}) => (await this.resolver.find(null, {page: 1, perPage: 1, resource: { _id: id } }))?.[0] ?? null
    }


    categorias: GraphQLFieldConfig<any, any, any> = {
        type: GraphQLList(CategoriaType),
        description: 'Find categorias',
        args: this.resolver.FindableType,
        resolve: (_, args: FindOptions<ICategoria>) => this.resolver.find(null, args)
    }

    mutations = {
        categoria: {
            type: CategoriaType,
            description: 'Insert or update videoclub',
            args: { element: { type: GraphQLNonNull(CategoriaInputType) }, populate: { type: QueryPopulateType } },
            resolve: (_, args: CreateOptions<ICategoria>) => this.resolver.create(null, args)
        }
    }

    constructor() {
        super();
        /* this.protectedRoutes = [{ route: 'categoria', privileges: 'admin' }] */
    }
}
