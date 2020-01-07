"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const findable_1 = require("./findable");
const creable_1 = require("./creable");
const countable_1 = require("./countable");
const graphql_1 = require("graphql");
__export(require("./countable"));
__export(require("./creable"));
__export(require("./findable"));
class FindableCreable {
    constructor(model) {
        this.model = null;
        this.model = model;
        const findable = new findable_1.Findable(model);
        const creable = new creable_1.Creable(model);
        this.CreableType = creable.CreableType;
        this.FindableType = findable.FindableType;
        this.create = creable.create;
        this.find = findable.find;
    }
}
exports.FindableCreable = FindableCreable;
class CreableCountable {
    constructor(model) {
        this.model = null;
        this.model = model;
        const creable = new creable_1.Creable(model);
        const countable = new countable_1.Countable(model);
        this.CountableType = countable.CountableType;
        this.CreableType = creable.CreableType;
        this.count = countable.count;
        this.create = creable.create;
    }
}
exports.CreableCountable = CreableCountable;
class FindableCountable {
    constructor(model) {
        this.model = null;
        this.model = model;
        const findable = new findable_1.Findable(model);
        const countable = new countable_1.Countable(model);
        this.CountableType = countable.CountableType;
        this.FindableType = findable.FindableType;
        this.count = countable.count;
        this.find = findable.find;
    }
}
exports.FindableCountable = FindableCountable;
class All {
    constructor(model) {
        this.model = null;
        this.model = model;
        const findable = new findable_1.Findable(model);
        const creable = new creable_1.Creable(model);
        const countable = new countable_1.Countable(model);
        this.CountableType = countable.CountableType;
        this.CreableType = creable.CreableType;
        this.FindableType = findable.FindableType;
        this.count = countable.count;
        this.create = creable.create;
        this.find = findable.find;
    }
}
exports.All = All;
exports.QueryPopulateType = new graphql_1.GraphQLInputObjectType({
    name: 'QueryPopulateType',
    description: 'Query to populate compressed params of the item',
    fields: {
        path: { type: graphql_1.GraphQLString },
        select: { type: graphql_1.GraphQLString },
        match: { type: graphql_1.GraphQLString },
        model: { type: graphql_1.GraphQLString },
    }
});
//# sourceMappingURL=index.js.map