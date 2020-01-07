'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class every exported route must implement
 *
 * @export
 * @class IRoute
 */
class IRoute {
    constructor() {
        this.protectedRoutes = [];
    }
    getRoutes() {
        this.routes = Reflect.ownKeys(this).filter(v => v !== 'routes' && v !== 'protectedRoutes' && v !== 'mutations' && v !== 'resolver').reduce((old, current) => ({
            ...old,
            [current]: Reflect.getOwnPropertyDescriptor(this, current).value
        }), {});
        return this.routes;
    }
    ;
    getMutations() {
        return this.mutations;
    }
    ;
    getProtectedRoutes() {
        return this.protectedRoutes;
    }
    ;
}
exports.IRoute = IRoute;
//# sourceMappingURL=route.js.map