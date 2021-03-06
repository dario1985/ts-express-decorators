"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertyRegistry_1 = require("../../converters/registries/PropertyRegistry");
var ParamRegistry_1 = require("../registries/ParamRegistry");
/**
 * Add required annotation for a function argument.
 *
 * The @Required decorator can be used on two cases.
 *
 * To decorate a parameters:
 *
 * ```typescript
 * @Post("/")
 * async method(@Required() @BodyParams("field") field: string) {}
 * ```
 *
 * To decorate a model:
 *
 * ```typescript
 * class Model {
 *   @JsonProperty()
 *   @Required()
 *   field: string;
 * }
 * ```
 *
 * > Required will throw a BadRequest when the given value is `null`, an empty string or `undefined`.
 *
 * ### Allow a values
 *
 * In some case, you didn't want trigger a BadRequest when the value is an empty string for example.
 * The decorator `@Allow()`, allow you to configure a value list for which there will be no exception.
 *
 * ```typescript
 * class Model {
 *   @JsonProperty()
 *   @Required()
 *   @Allow("")
 *   field: string;
 * }
 * ```
 *
 * @returns {Function}
 * @decorator
 */
function Required() {
    var allowedValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedValues[_i] = arguments[_i];
    }
    return function (target, propertyKey, parameterIndex) {
        if (typeof parameterIndex === "number") {
            ParamRegistry_1.ParamRegistry.required(target, propertyKey, parameterIndex);
        }
        else {
            PropertyRegistry_1.PropertyRegistry.required(target, propertyKey, allowedValues);
        }
    };
}
exports.Required = Required;
//# sourceMappingURL=required.js.map