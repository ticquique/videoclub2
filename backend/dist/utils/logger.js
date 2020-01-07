"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
log4js.configure({
    appenders: {
        out: { type: 'console' },
        file: { type: 'file', filename: '/tmp/api.log', maxLogSize: 1048576, backups: 2, compress: true },
        errors: { type: 'file', filename: '/tmp/errors.log', maxLogSize: 1048576, backups: 2, compress: true },
        errors_only: { type: 'logLevelFilter', appender: 'errors', level: 'error' }
    },
    categories: {
        default: { appenders: ['out', 'file', 'errors_only'], level: 'all' }
    }
});
const initialLogger = log4js.getLogger("initial");
exports.initialLogger = initialLogger;
const httpLogger = log4js.getLogger('http');
exports.httpLogger = httpLogger;
//# sourceMappingURL=logger.js.map