'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const typedef_1 = require("../administrator/typedef");
const typedef_2 = require("../member/typedef");
const typedef_3 = require("../rent/typedef");
exports.StatisticType = new graphql_1.GraphQLObjectType({
    name: 'Statistic',
    fields: {
        _id: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLString },
        administrator: { type: typedef_1.AdministratorType },
        member: { type: typedef_2.MemberType },
        rents: { type: graphql_1.GraphQLList(typedef_3.RentType) },
        amount: { type: graphql_1.GraphQLFloat },
        created_at: { type: graphql_1.GraphQLString },
        updated_at: { type: graphql_1.GraphQLString }
    }
});
//# sourceMappingURL=typedef.js.map