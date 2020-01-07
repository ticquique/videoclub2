
import * as graphqlHTTP from "express-graphql";
import getEnv from "../../env";
import { AuthMiddleware } from "../../middleware";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { SolicitudRouter } from "./solicitud/solicitud";
import { applyMiddleware } from "graphql-middleware";
import { CategoriaRouter } from "./categoria/categoria";
import { ReporteroRouter } from "./reportero/reportero";

const authService = new AuthMiddleware();
const routers = [
    new SolicitudRouter(),
    new CategoriaRouter(),
    new ReporteroRouter(),
];

const routes = routers.reduce((o,c) => ({...o, ...c.getRoutes()}), {})
const protectedRoutes = routers.reduce((o,c) => [...o, ...c.getProtectedRoutes()], [])
const mutations = routers.reduce((o,c) => ({...o, ...c.getMutations()}), {})

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: routes
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})

export default graphqlHTTP(async (request) => {
    const env = await getEnv();
    return {
        schema: applyMiddleware(schema, authService.getMiddleware(...protectedRoutes)),
        graphiql: !env.production,
        context: {
            user: await authService.tokenToUser(request.headers.authorization)
        }
    }
}) 