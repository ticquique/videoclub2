/*  - Código del videoclub (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typedef_1 = require("./typedef");
const resolver_1 = require("./resolver");
const route_1 = require("../../route");
const methods_1 = require("../../methods");
/**
 * Video routes
 *
 * @export
 * @class VideoclubRouter
 * @extends {IRoute}
 */
class VideoclubRouter extends route_1.IRoute {
    constructor() {
        super();
        this.resolver = new resolver_1.VideoclubResolver();
        this.videoclub = {
            type: typedef_1.VideoclubType,
            description: 'Retrieve single videoclub by id',
            args: { id: { type: graphql_1.GraphQLString } },
            resolve: async (_, { id }) => {
                const res = await this.resolver.find(null, { page: 1, perPage: 1, resource: { _id: id } });
                return res.length ? res[0] : null;
            }
        };
        this.videoclubs = {
            type: graphql_1.GraphQLList(typedef_1.VideoclubType),
            description: 'Find videoclubs',
            args: this.resolver.FindableType,
            resolve: (_, args) => this.resolver.find(null, args)
        };
        this.mutations = {
            videoclub: {
                type: typedef_1.VideoclubType,
                description: 'Insert or update videoclub',
                args: { element: { type: typedef_1.VideoclubInputType }, populate: { type: methods_1.QueryPopulateType } },
                resolve: (_, args) => this.resolver.create(null, args)
            }
        };
        /* this.protectedRoutes = [{ route: 'videoclubs', privileges: 'admin' }]; */
    }
}
exports.VideoclubRouter = VideoclubRouter;
//# sourceMappingURL=videoclub.js.map