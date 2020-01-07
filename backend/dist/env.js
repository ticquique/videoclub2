'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const getOsEnv = (key, def = null) => process.env[key] === undefined ? def : process.env[key];
const osenv = {
    production: getOsEnv('PRODUCTION') === 'true',
    mongo: {
        username: getOsEnv('MONGO_USER'),
        password: getOsEnv('MONGO_PASSWORD'),
        database: getOsEnv('MONGO_DATABASE')
    },
    express: {
        port: getOsEnv('PORT', '3000'),
        host: getOsEnv('HOST', '0.0.0.0'),
    },
    application: {
        domain: getOsEnv('DOMAIN', '0.0.0.0'),
        secret: getOsEnv('SECRET', 'mysecret'),
        revoquedTokens: getOsEnv('REVOQUED', '').split(',')
    }
};
exports.osenv = osenv;
const getEnv = async () => {
    const databaseEnv = {};
    const env = { ...osenv, ...databaseEnv };
    return env;
};
exports.default = getEnv;
//# sourceMappingURL=env.js.map