"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module common/core
 */
require("reflect-metadata");
var utils_1 = require("../utils");
/** */
/**
 * @stable
 */
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     * @param key A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * result = Metadata.get("custom:annotation", Example);
     *
     * // property (on constructor)
     * result = Metadata.get("custom:annotation", Example, "staticProperty");
     *
     * // property (on prototype)
     * result = Metadata.get("custom:annotation", Example.prototype, "property");
     *
     * // method (on constructor)
     * result = Metadata.get("custom:annotation", Example, "staticMethod");
     *
     * // method (on prototype)
     * result = Metadata.get("custom:annotation", Example.prototype, "method");
     * ```
     *
     */
    Metadata.get = function (key, target, propertyKey) {
        return Reflect.getMetadata(key, utils_1.getClass(target), propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     * @param key A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * result = Metadata.getOwn("custom:annotation", Example);
     *
     * // property (on constructor)
     * result = Metadata.getOwn("custom:annotation", Example, "staticProperty");
     *
     * // property (on prototype)
     * result = Metadata.getOwn("custom:annotation", Example.prototype, "property");
     *
     * // method (on constructor)
     * result = Metadata.getOwn("custom:annotation", Example, "staticMethod");
     *
     * // method (on prototype)
     * result = Metadata.getOwn("custom:annotation", Example.prototype, "method");
     * ```
     *
     */
    Metadata.getOwn = function (key, target, propertyKey) {
        return Reflect.getOwnMetadata(key, utils_1.getClass(target), propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_TYPE on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getType(Example);
     *
     * // property (on constructor)
     * result = Metadata.getType(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getType(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getType = function (target, propertyKey) {
        return Reflect.getMetadata(DESIGN_TYPE, target, propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_TYPE on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getOwnType(Example);
     *
     * // property (on constructor)
     * result = Metadata.getOwnType(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getOwnType(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getOwnType = function (target, propertyKey) {
        return Reflect.getMetadata(DESIGN_TYPE, target, propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_RETURN_TYPE on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getReturnType(Example);
     *
     * // property (on constructor)
     * result = Metadata.getReturnType(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getReturnType(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getReturnType = function (target, propertyKey) {
        return Reflect.getMetadata(DESIGN_RETURN_TYPE, target, propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_RETURN_TYPE on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getOwnReturnType(Example);
     *
     * // property (on constructor)
     * result = Metadata.getOwnReturnType(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getOwnReturnType(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getOwnReturnType = function (target, propertyKey) {
        return Reflect.getOwnMetadata(DESIGN_RETURN_TYPE, target, propertyKey);
    };
    /**
     * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
     * @param key A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * result = Metadata.has("custom:annotation", Example);
     *
     * // property (on constructor)
     * result = Metadata.has("custom:annotation", Example, "staticProperty");
     *
     * // property (on prototype)
     * result = Metadata.has("custom:annotation", Example.prototype, "property");
     *
     * // method (on constructor)
     * result = Metadata.has("custom:annotation", Example, "staticMethod");
     *
     * // method (on prototype)
     * result = Metadata.has("custom:annotation", Example.prototype, "method");
     * ```
     *
     */
    Metadata.has = function (key, target, propertyKey) {
        return Reflect.hasMetadata(key, utils_1.getClass(target), propertyKey);
    };
    /**
     * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
     * @param key A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * result = Metadata.has("custom:annotation", Example);
     *
     * // property (on constructor)
     * result = Metadata.hasOwn("custom:annotation", Example, "staticProperty");
     *
     * // property (on prototype)
     * result = Metadata.hasOwn("custom:annotation", Example.prototype, "property");
     *
     * // method (on constructor)
     * result = Metadata.hasOwn("custom:annotation", Example, "staticMethod");
     *
     * // method (on prototype)
     * result = Metadata.hasOwn("custom:annotation", Example.prototype, "method");
     * ```
     *
     */
    Metadata.hasOwn = function (key, target, propertyKey) {
        return Reflect.hasOwnMetadata(key, utils_1.getClass(target), propertyKey);
    };
    /**
     * Deletes the metadata entry from the target object with the provided key.
     * @param key A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns `true` if the metadata entry was found and deleted; otherwise, false.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * result = Metadata.delete("custom:annotation", Example);
     *
     * // property (on constructor)
     * result = Metadata.delete("custom:annotation", Example, "staticProperty");
     *
     * // property (on prototype)
     * result = Metadata.delete("custom:annotation", Example.prototype, "property");
     *
     * // method (on constructor)
     * result = Metadata.delete("custom:annotation", Example, "staticMethod");
     *
     * // method (on prototype)
     * result = Metadata.delete("custom:annotation", Example.prototype, "method");
     * ```
     *
     */
    Metadata.delete = function (key, target, propertyKey) {
        return Reflect.deleteMetadata(key, utils_1.getClass(target), propertyKey);
    };
    /**
     * Set the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @param value A value that contains attached metadata.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.setParamTypes(Example, undefined, [Object]);
     *
     * // property (on constructor)
     * result = Metadata.setParamTypes(Example, "staticProperty", [Object]);
     *
     * // property (on prototype)
     * result = Metadata.setParamTypes(Example.prototype, "property", [Object]);
     *
     * // method (on constructor)
     * result = Metadata.setParamTypes(Example, "staticMethod", [Object]);
     *
     * // method (on prototype)
     * result = Metadata.setParamTypes(Example.prototype, "method", [Object]);
     * ```
     *
     */
    Metadata.setParamTypes = function (target, propertyKey, value) {
        return this.set(DESIGN_PARAM_TYPES, value, target.prototype, propertyKey);
    };
    /**
     * Define a unique metadata entry on the target.
     * @param key A key used to store and retrieve metadata.
     * @param value A value that contains attached metadata.
     * @param target The target object on which to define metadata.
     * @param propertyKey The property key for the target.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // constructor
     * Reflect.defineMetadata("custom:annotation", options, Example);
     *
     * // property (on constructor)
     * Reflect.defineMetadata("custom:annotation", Number, Example, "staticProperty");
     *
     * // property (on prototype)
     * Reflect.defineMetadata("custom:annotation", Number, Example.prototype, "property");
     *
     * // method (on constructor)
     * Reflect.defineMetadata("custom:annotation", Number, Example, "staticMethod");
     *
     * // method (on prototype)
     * Reflect.defineMetadata("custom:annotation", Number, Example.prototype, "method");
     *
     * // decorator factory as metadata-producing annotation.
     * function MyAnnotation(options): PropertyDecorator {
     *     return (target, key) => Reflect.defineMetadata("custom:annotation", options, target, key);
     * }
     * ```
     *
     */
    Metadata.set = function (key, value, target, propertyKey) {
        var targets = PROPERTIES.has(key) ? PROPERTIES.get(key) || [] : [];
        var classConstructor = utils_1.getClass(target);
        if (targets.indexOf(classConstructor) === -1) {
            targets.push(classConstructor);
            PROPERTIES.set(key, targets);
        }
        Reflect.defineMetadata(key, value, utils_1.getClass(target), propertyKey);
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getParamTypes(Example);
     *
     * // property (on constructor)
     * result = Metadata.getParamTypes(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getParamTypes(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getParamTypes = function (target, propertyKey) {
        return Reflect.getMetadata(DESIGN_PARAM_TYPES, target, propertyKey) || [];
    };
    /**
     * Gets the metadata value for the provided metadata DESIGN_PARAM_TYPES on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     * ```typescript
     * class Example {
     *     // property declarations are not part of ES6, though they are valid in TypeScript:
     *     // static staticProperty;
     *     // property;
     *
     *     static staticMethod(p) { }
     *     method(p) { }
     * }
     *
     * // on contructor
     * result = Metadata.getParamTypes(Example);
     *
     * // property (on constructor)
     * result = Metadata.getParamTypes(Example, "staticProperty");
     *
     * // method (on constructor)
     * result = Metadata.getParamTypes(Example, "staticMethod");
     * ```
     *
     */
    Metadata.getOwnParamTypes = function (target, propertyKey) {
        return Reflect.getOwnMetadata(DESIGN_PARAM_TYPES, target, propertyKey) || [];
    };
    /**
     * Get all metadata for a metadataKey.
     * @param metadataKey
     */
    Metadata.getTargetsFromPropertyKey = function (metadataKey) {
        return PROPERTIES.has(metadataKey) ? PROPERTIES.get(metadataKey) || [] : [];
    };
    return Metadata;
}());
exports.Metadata = Metadata;
/**
 * Metadata key
 * @private
 * @type {string}
 */
var DESIGN_PARAM_TYPES = "design:paramtypes";
/**
 * Metadata key
 * @private
 * @type {string}
 */
var DESIGN_TYPE = "design:type";
/**
 * Metadata key
 * @private
 * @type {string}
 */
var DESIGN_RETURN_TYPE = "design:returntype";
/**
 * Properties collections
 * @private
 * @type {string}
 */
var PROPERTIES = new Map();
//# sourceMappingURL=Metadata.js.map