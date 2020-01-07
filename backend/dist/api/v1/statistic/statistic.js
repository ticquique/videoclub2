/*  - Código del statistic (autonumérico)
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
/**
 * Video routes
 *
 * @export
 * @class StatisticRouter
 * @extends {IRoute}
 */
class StatisticRouter extends route_1.IRoute {
    constructor() {
        super();
        this.resolver = new resolver_1.StatisticResolver();
        this.statistic = {
            type: typedef_1.StatisticType,
            description: 'Retrieve single statistic by id',
            args: { id: { type: graphql_1.GraphQLString } }, resolve: async (_, { id }) => {
                const res = await this.resolver.find(null, { page: 1, perPage: 1, resource: { _id: id } });
                return res.length ? res[0] : null;
            }
        };
        this.statistics = {
            type: graphql_1.GraphQLList(typedef_1.StatisticType),
            description: 'Find statistics',
            args: this.resolver.FindableType,
            resolve: (_, args) => this.resolver.find(null, args)
        };
        this.mutations = {
            rent: {
                type: typedef_1.StatisticType,
                description: 'Insert or update videoclub',
                resolve: (_, args) => this.resolver.create(null, args)
            }
        };
        /* this.protectedRoutes = [{ route: 'statistic', privileges: 'admin' }] */
    }
}
exports.StatisticRouter = StatisticRouter;
//# sourceMappingURL=statistic.js.map