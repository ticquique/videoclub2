'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const express = require("express");
const log4js = require("log4js");
const logger_1 = require("../utils/logger");
const schema_1 = require("../api/v1/schema");
/**
 * Loader for express application
 *
 * @export
 * @class ExpressLoader
 * @implements {ILoader<Express.Application>}
 */
class ExpressLoader {
    async load() {
        const app = express();
        const env = await env_1.default();
        const port = +env.express.port;
        const host = env.express.host;
        app.use(log4js.connectLogger(logger_1.httpLogger, { level: 'debug' }));
        app.use('/graphql', schema_1.default);
        app.listen(port, host, () => {
            logger_1.initialLogger.info(`STARTING SERVER  http://${host}:${port} on ${env.production ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);
        });
        return app;
    }
}
exports.ExpressLoader = ExpressLoader;
//# sourceMappingURL=express.js.map