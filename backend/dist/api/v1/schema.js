"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphqlHTTP = require("express-graphql");
const env_1 = require("../../env");
const middleware_1 = require("../../middleware");
const graphql_1 = require("graphql");
const videoclub_1 = require("./videoclub");
const graphql_middleware_1 = require("graphql-middleware");
const statistic_1 = require("./statistic");
const rent_1 = require("./rent");
const member_1 = require("./member");
const film_1 = require("./film");
const administrator_1 = require("./administrator");
exports.default = graphqlHTTP(async (request) => {
    const env = await env_1.default();
    const authService = new middleware_1.AuthMiddleware();
    const routers = [
        new videoclub_1.VideoclubRouter(),
        new statistic_1.StatisticRouter(),
        new rent_1.RentRouter(),
        new member_1.MemberRouter(),
        new film_1.FilmRouter(),
        new administrator_1.AdministratorRouter(),
    ];
    const routes = routers.reduce((o, c) => ({ ...o, ...c.getRoutes() }), {});
    const protectedRoutes = routers.reduce((o, c) => [...o, ...c.getProtectedRoutes()], []);
    const mutations = routers.reduce((o, c) => ({ ...o, ...c.getMutations() }), {});
    return {
        schema: graphql_middleware_1.applyMiddleware(new graphql_1.GraphQLSchema({
            query: new graphql_1.GraphQLObjectType({
                name: 'Query',
                fields: routes
            }),
            mutation: new graphql_1.GraphQLObjectType({
                name: 'Mutation',
                fields: mutations
            })
        }), authService.getMiddleware(...protectedRoutes)),
        graphiql: !env.production,
        context: {
            user: await authService.tokenToUser(request.headers.authorization)
        }
    };
});
//# sourceMappingURL=schema.js.map