"use strict";
/**
 * @module common/mvc
 */
/** */
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../core/utils");
var ControllerRegistry_1 = require("../../registries/ControllerRegistry");
var EndpointRegistry_1 = require("../../registries/EndpointRegistry");
/**
 * Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
 * the base of the requested path matches `path.
 *
 * ```typescript
 * @Controller('/')
 * @UseBefore(Middleware1)
 * export class Ctrl {
 *
 *    @Get('/')
 *    @UseBefore(Middleware2)
 *    get() { }
 * }
 * ```
 *
 * @returns {function(any, any, any): *}
 * @param args
 * @decorator
 */
function UseBefore() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (target, targetKey, descriptor) {
        if (utils_1.getDecoratorType([target, targetKey, descriptor]) === "method") {
            EndpointRegistry_1.EndpointRegistry.useBefore(target, targetKey, args);
            return descriptor;
        }
        ControllerRegistry_1.ControllerRegistry.merge(target, {
            middlewares: {
                useBefore: args
            }
        });
    };
}
exports.UseBefore = UseBefore;
//# sourceMappingURL=useBefore.js.map