/*  - Código del administrator (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const resolver_1 = require("./resolver");
const route_1 = require("../../route");
const typedef_1 = require("./typedef");
const methods_1 = require("../../methods");
/**
 * Video routes
 *
 * @export
 * @class AdministratorRouter
 * @extends {IRoute}
 */
class AdministratorRouter extends route_1.IRoute {
    constructor() {
        super();
        this.resolver = new resolver_1.AdministratorResolver();
        this.administrator = {
            type: typedef_1.AdministratorType,
            description: 'Retrieve single administrator by id',
            args: { id: { type: graphql_1.GraphQLString } },
            resolve: async (_, { id }) => (await this.resolver.find(null, { page: 1, perPage: 1, resource: { _id: id } }))?.[0]
        };
        this.administrators = {
            type: graphql_1.GraphQLList(typedef_1.AdministratorType),
            description: 'Find administrators',
            args: this.resolver.FindableType,
            resolve: (_, args) => this.resolver.find(null, args)
        };
        this.mutations = {
            administrator: {
                type: typedef_1.AdministratorType,
                description: 'Insert or update administrator',
                args: { element: { type: typedef_1.AdministratorInputType }, populate: { type: methods_1.QueryPopulateType } },
                resolve: (_, args) => this.resolver.create(null, args)
            }
        };
        /* this.protectedRoutes = [{ route: 'administrator', privileges: 'admin' }] */
    }
}
exports.AdministratorRouter = AdministratorRouter;
//# sourceMappingURL=administrator.js.map