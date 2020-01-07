'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_shield_1 = require("graphql-shield");
const jsonwebtoken_1 = require("jsonwebtoken");
const env_1 = require("../env");
const models_1 = require("../models");
var Privileges;
(function (Privileges) {
    Privileges[Privileges["admin"] = 0] = "admin";
    Privileges[Privileges["user"] = 1] = "user";
})(Privileges = exports.Privileges || (exports.Privileges = {}));
/**
 * Authentication middleware
 **/
class AuthMiddleware {
    constructor() {
        this.getMiddleware = (...rules) => {
            return graphql_shield_1.shield({
                Query: rules.reduce((old, current) => ({
                    ...old,
                    [current.route]: current.privileges === 'admin' ?
                        graphql_shield_1.and(this.isAuthenticated, this.isAdmin) : this.isAuthenticated
                }), {}),
            });
        };
        this.isAuthenticated = graphql_shield_1.rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.member !== null && ctx.member !== undefined);
        this.isAdmin = graphql_shield_1.rule({ cache: 'contextual' })(async (parent, args, ctx, info) => ctx.administrator !== null && ctx.administrator !== undefined);
    }
    /**
     * Create token for the user provided
     *
     * @param {IUser} user
     * @returns Token generated
     * @memberof AuthService
     */
    async createToken(user) {
        const today = new Date();
        const env = await env_1.default();
        const payload = {
            iss: env.application.domain,
            sub: user._id,
            iat: today.getTime(),
            privileges: user.privileges,
            exp: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).getTime(),
        };
        const token = jsonwebtoken_1.sign(payload, env.application.secret, { algorithm: 'HS256' });
        return token;
    }
    /**
     * Validate if received token is correct
     *
     * @param {string} token
     * @returns decoded token
     * @memberof AuthService
     */
    async validateToken(token) {
        if (typeof token !== 'string')
            throw Error('Invalid token provided');
        const parts = token.split(' ');
        if (parts.length !== 2)
            throw Error('Invalid credentials');
        const scheme = parts[0].trim();
        let credentials = parts[1].trim();
        if (credentials.startsWith('"'))
            credentials = credentials.substring(1);
        if (credentials.endsWith('"'))
            credentials = credentials.substring(0, credentials.length - 1);
        if (!/^Bearer$/i.test(scheme))
            throw Error('Format is Authorization: Bearer [token]');
        const env = await env_1.default();
        const decoded = jsonwebtoken_1.verify(credentials, env.application.secret, { algorithms: ['HS256'] });
        if (env.application.revoquedTokens.indexOf(decoded.sub) > -1)
            throw Error('User banned for some reason, check your email');
        return decoded;
    }
    /**
     * Get user by token received
     *
     * @param {(Token | string)} token
     * @returns user asociated with the token
     * @memberof AuthService
     */
    async tokenToUser(token) {
        let user = null;
        if (token) {
            token = typeof token === 'string' ? await this.validateToken(token) : token;
            user = await models_1.User.findById(token.sub);
        }
        return user;
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=authMiddleware.js.map