'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const mongoose_1 = require("mongoose");
/**
 * Loader for mongoose application
 *
 * @export
 * @class MongooseLoader
 * @implements {ILoader<typeof import("mongoose")>}
 */
class MongooseLoader {
    async load() {
        const env = await env_1.default();
        const auth = { user: env.mongo.username, password: env.mongo.password };
        const options = { auth, useNewUrlParser: true, authSource: 'admin', useUnifiedTopology: true };
        const mongoose = await mongoose_1.connect(`mongodb://mongo:27017/${env.mongo.database}`, options);
        return mongoose;
    }
}
exports.MongooseLoader = MongooseLoader;
//# sourceMappingURL=mongoose.js.map