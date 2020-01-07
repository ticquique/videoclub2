/*  - Código del member (autonumérico)
    - Nombre del gerente (cadena, obligatorio y editable)
    - Ciudad (cadena, obligatorio y editable)
    - Calle (cadena, obligatorio y editable)
    - Código postal (cadena 5 caracteres, obligatorio y editable) */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typedef_1 = require("./typedef");
const route_1 = require("../../route");
const resolver_1 = require("./resolver");
/**
 * Video routes
 *
 * @export
 * @class MemberRouter
 * @extends {IRoute}
 */
class MemberRouter extends route_1.IRoute {
    constructor() {
        super();
        this.resolver = new resolver_1.MemberResolver();
        this.member = {
            type: typedef_1.MemberType,
            description: 'Retrieve single member by id',
            args: { id: { type: graphql_1.GraphQLString } },
            resolve: async (_, { id }) => {
                const res = await this.resolver.find(null, { page: 1, perPage: 1, resource: { _id: id } });
                return res.length ? res[0] : null;
            }
        };
        this.members = {
            type: graphql_1.GraphQLList(typedef_1.MemberType),
            args: this.resolver.FindableType,
            description: 'Find members',
            resolve: (_, args) => this.resolver.find(null, args)
        };
        this.mutations = {
            member: {
                type: typedef_1.MemberType,
                description: 'Insert or update videoclub',
                resolve: (_, args) => this.resolver.create(null, args)
            }
        };
        /* this.protectedRoutes = [{ route: 'member', privileges: 'admin' }] */
    }
}
exports.MemberRouter = MemberRouter;
//# sourceMappingURL=member.js.map