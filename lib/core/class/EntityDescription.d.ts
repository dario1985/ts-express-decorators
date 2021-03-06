import { Type } from "../interfaces";
/**
 * EntityDescription store all information collected by a decorator (class, property key and in option the index of the parameters).
 */
export declare abstract class EntityDescription {
    protected _target: Type<any>;
    protected _propertyKey: string | symbol;
    /**
     * Type of the collection (Array, Map, Set, etc...)
     */
    protected _collectionType: Type<any>;
    /**
     * Custom name.
     */
    private _name;
    /**
     * Type of the entity.
     */
    protected _type: Type<any>;
    /**
     * Index of the entity. Only used when the entity describe a parameters.
     */
    protected _index: number;
    /**
     * Required entity.
     */
    protected _required: boolean;
    /**
     * Allowed value when the entity is required.
     * @type {Array}
     */
    private _allowedValues;
    constructor(_target: Type<any>, _propertyKey: string | symbol, index?: number | PropertyDescriptor);
    /**
     * Return the index of the parameters.
     * @returns {any}
     */
    readonly index: number;
    /**
     * Class of the entity.
     * @returns {Type<any>}
     */
    /**
     *
     * @param {Type<any>} target
     */
    target: Type<any>;
    /**
     * Return the class name of the entity.
     * @returns {string}
     */
    readonly targetName: string;
    /**
     * Name of the method or attribute related to the class.
     * @returns {string|symbol}
     */
    readonly propertyKey: string | symbol;
    /**
     *
     * @returns {Type<any>}
     */
    /**
     *
     * @param value
     */
    type: Type<any>;
    /**
     *
     * @returns {string}
     */
    readonly typeName: string;
    /**
     *
     * @returns {any}
     */
    /**
     *
     * @param {Type<any>} collectionType
     */
    collectionType: Type<any>;
    /**
     *
     * @returns {string}
     */
    readonly collectionName: string;
    /**
     *
     * @returns {boolean}
     */
    readonly isCollection: boolean;
    /**
     *
     * @returns {boolean}
     */
    readonly isArray: boolean;
    /**
     *
     * @returns {boolean}
     */
    readonly isPrimitive: boolean;
    /**
     *
     * @returns {boolean}
     */
    readonly isDate: boolean;
    /**
     *
     * @returns {boolean}
     */
    readonly isObject: boolean;
    /**
     *
     * @returns {boolean}
     */
    readonly isClass: boolean;
    /**
     *
     * @returns {string}
     */
    /**
     *
     * @param {string} value
     */
    name: string;
    /**
     * Return the required state.
     * @returns {boolean}
     */
    /**
     * Change the state of the required data.
     * @param value
     */
    required: boolean;
    /**
     * Return the allowed values.
     * @returns {any[]}
     */
    /**
     * Set the allowed values when the value is required.
     * @param {any[]} value
     */
    allowedValues: any[];
    /**
     * This method use `EntityDescription.required` and `allowedValues` to validate the value.
     * @param value
     * @returns {boolean}
     */
    isValidValue(value: any): boolean;
}
