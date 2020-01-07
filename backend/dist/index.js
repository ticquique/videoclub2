'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const loaders_1 = require("./loaders");
const logger_1 = require("./utils/logger");
const loaders = [loaders_1.MongooseLoader, loaders_1.ExpressLoader];
(async () => {
    for (const loader of loaders) {
        const loaderInstance = new loader();
        await loaderInstance.load();
        logger_1.initialLogger.info(`Loaded ${loader.name}`);
    }
})().catch(e => logger_1.initialLogger.error(e));
//# sourceMappingURL=index.js.map